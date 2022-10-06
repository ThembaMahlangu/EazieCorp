const express = require('express');
const path = require('path');
const router = express.Router();
const add_user = require('./../models/registration')
const connectDB = require('../config/mongodb.js')


router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('login.ejs');
  })

router.post('/register', async (req, res) => {
      let new_user = new add_user({
        Username : req.body.username_signup,
        email: req.body.email_signup,
        password : req.body.password_signup
      });

      try {
        new_user = await new_user.save();
        console.log(new_user)
        res.render('leaves.ejs');

      } catch (e) {
        res.render('404.ejs');
      }

      res.redirect('/login');
    });

router.post('/login', function (req, res) {
    res.redirect('/admin')
  });
module.exports = router;