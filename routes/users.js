const express = require('express');
const router = express.Router();

//Require bcrypt - hash+salt passwords
const bcrypt = require('bcrypt');

// Require controller modules.
const user_controller = require('../controllers/users_controller');

/* GET users listing. */
// GET request for list of all users.
router.get('/albums', users_controller.user_list);

// router.get('/', function(req, res, next) {
//     res.send('Response from "users" route');
// });

module.exports = router;
