const bcrypt = require('bcryptjs');
const User = require('../models/User');

const databaseHelpers = {
    getAllUsers: function (res) {
        User.find()
            .then((users) => {
                return res.json(users);
            })
            .catch((err) => console.log(err));
    },

    checkUserExists: async function (email, res) {
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists.' });
            }
            return res.status(200).json({ msg: 'User does not exist yet.' });
        } catch (err) {
            console.log(err.message);
            return res.status(500).send('Error In Checking For User');
        }
    },

    createUser: async function (email, password, res) {
        let user = new User({ email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        const newUser = await user.save();
        if (newUser === user) return res.status(201).send('User created');
    },

    comparePassword: async function (password) {
        // 1. Bcrypt.compare
        // 2. Check if match
        console.log('checking if passwords match');
    },
};

module.exports = databaseHelpers;
