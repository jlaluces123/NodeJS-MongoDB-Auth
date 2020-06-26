const databaseHelpers = {
    checkUserExists: async function (email) {
        // 1. FindOne (email)
        // 2. If no user
        console.log('checking if user exists');
    },

    comparePassword: async function (password) {
        // 1. Bcrypt.compare
        // 2. Check if match
        console.log('checking if passwords match');
    },
};

module.exports = databaseHelpers;
