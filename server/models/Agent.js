'use strict';
module.exports = (sequelize, DataTypes) => {
    const Agent = sequelize.define('Agent', {
        prenom: {
            type: DataTypes.STRING
        },
        nom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        imgsrc: {
            type: DataTypes.STRING
        },
        ville: {
            type: DataTypes.STRING
        },
        code_postal: {
        type: DataTypes.INTEGER
    }
    }, {
        timestamps: false
    });
    return Agent;
};
