const express=require('express');
const router = express.Router();
const Pusher = require('pusher');
var pusher = new Pusher({
    appId: '491426',
    key: '64d6fddd560f8610448d',
    secret: '95f9546a9dc497e51c6d',
    cluster: 'us2',
    encrypted: true
  });

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/',(req,res)=>{
    pusher.trigger('portfolio-poll', 'portfolio-vote', {
        points: 1,
        question:req.body.question
      });

      return res.json({success:true,message:'Thank you for voting'});
});

module.exports=router;