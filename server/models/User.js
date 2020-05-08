'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        prenom: {
            type: DataTypes.STRING
        },
        nom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        profile: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return User;
};
