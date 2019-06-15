const express = require('express');
const router = express.Router();

//Require bcrypt - compare hashed + salted passwords to login input
const bcrypt = require('bcrypt');

/* GET sessions listing. */
router.get('/', function(req, res, next) {
    res.send('Response from "sessions" route');
});

module.exports = router;
