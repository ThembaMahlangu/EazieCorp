const express = require('express');
const path = require('path');
const router = express.Router();
router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
    res.render('index.ejs');
  });

  
module.exports = router;