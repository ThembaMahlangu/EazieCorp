const express = require('express');
const router = express.Router();
const {home, addManager } = require('../controlers/admin')

router.get('/', home)
router.post('/', addManager )


module.exports = router;