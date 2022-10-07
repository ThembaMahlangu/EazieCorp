const express = require('express');
const { userInfo } = require('os');
const path = require('path');
const router = express.Router();
const add_user = require('./../models/users')


router.use(express.static(path.join(__dirname, 'public')));


// ---------------- login page for users ----------- \\

router.get('/', function (req, res) {
    res.render('login.ejs');
  })


// ---------------------- Register -----------------------\\


router.post('/register', async (req, res) =>{

  let new_user = await add_user.create({

    username : req.body.username,
    email: req.body.email_signup, 
    password: req.body.password_signup

  });
  
  try{
    res.redirect('./')
   console.log(new_user);

 }catch(e){
  console.log(e)
 };
  
});



// ---------------------- Login ---------------------- \\



router.post('/login', function (req, res) {
    res.redirect('/')
  });


   
module.exports = router;