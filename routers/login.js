const express = require('express');
const path = require('path');
const router = express.Router();
const connectDB = require('../config/mongodb.js')


router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('login.ejs');
  })

router.post('/register', function (req, res) {
    res.render('index.ejs');
  });

router.post('/login', function (req, res) {
    res.redirect('/admin')
  });
module.exports = router;