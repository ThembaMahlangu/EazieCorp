const express = require('express');
const { userInfo } = require('os');
const path = require('path');
const router = express.Router();
const add_user = require('./../models/users')


router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('login.ejs');
  })

router.post('/register', async (req, res) =>{

  let new_user = await add_user.create({

    name : req.body.username_signup,
    email: req.body.email_sign, 
    password: req.body.password_signup

  });
  console.log(new_user);

  
});



router.post('/login', function (req, res) {
    res.redirect('/admin')
  });
module.exports = router;