idleTime = 0;
$(function() {
    //popup
    $limit = 5;
    $('#preloader').delay(350).fadeOut('slow');
    if ($.cookie('test_status') != '1') {
        $.get('form.html', function(data) {
            $('.subs-popup').html(data);
            console.log('showing subpopup');
        });
        function timerIncrement() {
            idleTime = idleTime + 1;
            if (idleTime > $limit) {
                $('.subs-popup ').show();
                idleTime = 0;
            }
        }

        // Increment the idle time counter every second.
        var idleInterval = setInterval(timerIncrement, 1000); // 1 second


         $(this).mousemove(function (e) {
         idleTime = 0;
         });
        $(this).keypress(function (e) {
            idleTime = 0;
        });

        $.cookie('test_status', '1', { expires: 30 });
    }
});