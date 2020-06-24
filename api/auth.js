const express = require('express');
const { response } = require('express');
const router = express.Router();

// Login Function
router.get('/login', (req, res) => {
    res.send('Login.');
});

// Login w/ Google
router.get('/google', (req, res) => {
    res.send('Logging in with Google.');
});

// Logout Function
router.get('/logout', (req, res) => {
    res.send('Logging Out.');
});

module.exports = router;
