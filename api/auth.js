const express = require('express');
const {
    checkEmail,
    checkPassword,
    checkErrors,
    checkUserExists,
} = require('../helpers/validators');
const router = express.Router();

/*
Signup Function:
    [ @method: POST - @param: '/signup' ]
    1. Validate Email + Password
    2. Find if User already exists
    3. Create a User with information + save User in DB
*/
router.post('/signup', [checkEmail(), checkPassword()], (req, res) => {
    const { email, password } = req.body;
    checkErrors(req, res);
    checkUserExists();
});

/*
Login Function:
    [ @method: POST - @param: '/login' ]
    1. Validate email + password
    2. Find if user exists or not
    3. Compare password
    4. Return message if wanted
*/
router.post('/login', (req, res) => {
    res.send('Login.');
});

// Logout Function
router.post('/logout', (req, res) => {
    res.send('Logging Out.');
});

module.exports = router;
