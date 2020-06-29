const bcrypt = require('bcryptjs');
const User = require('../models/User');
const mongoose = require('mongoose');

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
                return;
            }
            return res.status(200).json({ msg: 'User does not exist yet.' });
        } catch (err) {
            console.log(err.message);
            return res.status(500).send('Error In Checking For User');
        }
    },

    createUser: async function (email, password, res) {
        let user = new User({
            _id: mongoose.Types.ObjectId(),
            email,
            password,
            membership: 'none',
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        const newUser = await user.save();
        if (newUser === user) return res.status(201).send('User created');
    },

    deleteUser: async function (userId, res) {
        const user = await userId;
        User.remove({ _id: user })
            .exec()
            .then((response) => res.status(200).json(response))
            .catch((err) => res.status(500).send(err));
    },

    login: async function (email, password, res) {
        // 1. Bcrypt.compare
        // 2. Check if match
        let user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('checking password');
        if (!isMatch) {
            res.status(400).json({
                msg: 'We did not recognize the email and password combination',
            });
        }
        return res.status(200).json({ msg: 'User log in successful.' });
    },
};

module.exports = databaseHelpers;
