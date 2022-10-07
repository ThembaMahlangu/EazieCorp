const express = require('express');
const path = require('path');
const router = express.Router();
const chat = require('./../models/chatbox');
router.use(express.static(path.join(__dirname, 'public')));


router.get('/', (req, res)=>{

    res.render('chat.ejs')
})

router.post('/', async function (req, res) {
    let new_chat = await chat.create({

        chat_text: req.body.chat_text,
    
      });
      
      try{
        res.render('chat.ejs')
       console.log(new_chat);
    
     }catch(e){
      console.log(e)
     };
  })


module.exports = router;