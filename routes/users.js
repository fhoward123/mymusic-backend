const express = require('express');
const router = express.Router();

//Require bcrypt - hash+salt passwords
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Response from "users" route');
});

module.exports = router;
