const express = require('express');
const { validators, databaseHelpers } = require('../helpers/index');
const router = express.Router();

router.get('/users', (req, res) => {
    databaseHelpers.getAllUsers(res);
});

router.delete('/users/:userId', (req, res) => {
    databaseHelpers.deleteUser(req.params.userId, res);
});

/*
Signup Function:
    [ @method: POST - @param: '/signup' ]
    1. Validate Email + Password
    2. Find if User already exists
    3. Create a User with information + save User in DB
*/
router.post(
    '/signup',
    [validators.checkEmail(), validators.checkPassword()],
    (req, res) => {
        const { email, password } = req.body;
        validators.checkErrors(req, res);
        databaseHelpers.checkUserExists(email, res);
        databaseHelpers.createUser(email, password, res);
    }
);

/*
Login Function:
    [ @method: POST - @param: '/login' ]
    1. Validate email + password
    2. Find if user exists or not
    3. Compare password
    4. Return message if wanted
*/
router.post(
    '/login',
    [validators.checkEmail(), validators.checkPassword()],
    (req, res) => {
        const { email, password } = req.body;
        validators.checkErrors(req, res);
        databaseHelpers.checkUserExists(email, res);
        databaseHelpers.login(email, password, res);
    }
);

// Logout Function
router.post('/logout', (req, res) => {
    res.send('Logging Out.');
});

module.exports = router;
