const express = require('express');
const { userInfo } = require('os');
const path = require('path');
const router = express.Router();
const bcrypt = require('bcrypt');
const add_user = require('./../models/users')


router.use(express.static(path.join(__dirname, 'public')));


// ---------------- login page for users ----------- \\

router.get('/', function (req, res) {
    res.render('login.ejs');
  })


// ---------------------- Register -----------------------\\


router.post('/register', async (req, res) =>{
  let hashedPassword = bcrypt.hashSync(req.body.password_signup, 10);
  let new_user = await add_user.create({
    
    username : req.body.username_signup,
    email: req.body.email_signup, 
    password: hashedPassword 

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