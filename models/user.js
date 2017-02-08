var passportLocalSequelize = require('passport-local-sequelize');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        hash: {
            type: DataTypes.TEXT
        },
        salt: {
            type: DataTypes.STRING
        }
    });

    passportLocalSequelize.attachToUser(User, {
        usernameField: 'username',
        hashField: 'hash',
        saltField: 'salt'
    });

    return User;
}