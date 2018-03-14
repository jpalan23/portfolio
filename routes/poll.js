const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require('../model/Vote');

const Pusher = require('pusher');
var pusher = new Pusher({
    appId: '491426',
    key: '64d6fddd560f8610448d',
    secret: '95f9546a9dc497e51c6d',
    cluster: 'us2',
    encrypted: true
  });

router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/',(req,res)=>{
    const newVote = {
        question: req.body.question,
        points: 1
      };

      new Vote(newVote).save().then(vote => {
        pusher.trigger('portfolio-poll', 'portfolio-vote', {
          points: parseInt(vote.points),
          question:vote.question
        });
    
        return res.json({ success: true, message: 'Thank you for voting' });
    });
});

module.exports=router;