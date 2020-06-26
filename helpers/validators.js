// File is for express-validator code chunks that are repeated many times
const { check, validationResult } = require('express-validator');

const helpers = {
    checkErrors: async function (req, res) {
        console.log('checking errors');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    },

    checkPassword: function () {
        console.log('checking password');
        return check('password', 'Please Try a New Password').isLength({
            min: 6,
        });
    },

    checkEmail: function () {
        console.log('checking email');
        return check('email', 'Please Enter A Valid Email')
            .isEmail()
            .notEmpty();
    },
};

module.exports = helpers;
