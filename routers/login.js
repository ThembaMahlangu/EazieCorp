const express = require('express');
const { userInfo } = require('os');
const path = require('path');
const router = express.Router();
const add_user = require('./../models/users')


router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('login.ejs');
  })
run()
async function run(){

      let new_user = await add_user.create({

        name : 'sakhile',
        email: 'nelsonsakhile@gmail.com',
        password: 'password'

      });
      console.log(new_user);
      
    };

router.post('/login', function (req, res) {
    res.redirect('/admin')
  });
module.exports = router;