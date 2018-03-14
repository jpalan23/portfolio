const form = document.getElementById('vote-form');

// Form Submit Event
form.addEventListener('submit', (e) => {
  // check Local Storage to see if `hasVoted` key already stored
  if(window.localStorage.getItem('hasVoted')) {
    $('#hasVotedAlreadyErrorMsg').removeClass('hidden');
    e.preventDefault();
  } else {
    // set Local Storage to show the user has voted already
    window.localStorage.setItem('hasVoted', true)

    const choice = document.querySelector('input[name=question]:checked').value;
    const data = { question: choice };

    fetch('http://localhost:3000/poll', {
      method: 'post',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
      e.preventDefault();
  }
});

fetch('http://localhost:3000/poll')
  .then(res => res.json())
  .then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;
    document.querySelector('#chartTitle').textContent = `Total Votes: ${totalVotes}`;

    // Refresh the Total Votes every 2 seconds
    setInterval(() => {
      fetch('http://localhost:3000/poll')
        .then(res => res.json())
        .then(data => document.querySelector('#chartTitle').textContent = `Total Votes: ${data.votes.length}`)
        .catch(err => console.log(err));
    }, 2000);

    // Count vote points - acc/current
    const voteCounts = votes.reduce(
      (acc, vote) => (
        (acc[vote.question] = (acc[vote.question] || 0) + parseInt(vote.points)), acc
      ),
      {}
    );

    // Set initial Data Points
    if (Object.keys(voteCounts).length === 0 && voteCounts.constructor === Object) {
      voteCounts.onestar = 0;
      voteCounts.twostar = 0;
      voteCounts.threestar = 0;
      voteCounts.fourstar = 0;
    }

    let dataPoints = [
      { label: 'onestar', y: voteCounts.onestar },
      { label: 'twostar', y: voteCounts.twostar },
      { label: 'threestar', y: voteCounts.threestar },
      { label: 'fourstar', y: voteCounts.fourstar }
    ];

    const chartContainer = document.querySelector('#chartContainer');

    if (chartContainer) {
      const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        theme: 'theme1',
        data: [
          {
            type: 'column',
            dataPoints: dataPoints
          }
        ]
      });
      chart.render();

      // Enable pusher logging - don't include this in production
      Pusher.logToConsole = true;

        var pusher = new Pusher('64d6fddd560f8610448d', {
        cluster: 'us2',
        encrypted: true
        });

      var channel = pusher.subscribe('portfolio-poll');
      channel.bind('portfolio-vote', function(data) {
        dataPoints = dataPoints.map(x => {
          if (x.label == data.question) {
            x.y += data.points;
            return x;
          } else {
            return x;
          }
        });
        chart.render();
      });
    }
  });