const express = require('express');
const passport = require('passport');

const router = express.Router();

// Login Function
router.get('/login', (req, res) => {
    res.send('Login.');
});

// Logout Function
router.get('/logout', (req, res) => {
    res.send('Logging Out.');
});

module.exports = router;
