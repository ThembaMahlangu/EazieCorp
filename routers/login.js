const express = require('express');
const path = require('path');
const router = express.Router();
router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('login.ejs');
  })

router.get('/activities', function (req, res) {
    res.render('activities.ejs');
  });

module.exports = router;