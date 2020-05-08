'use strict';
module.exports = (sequelize, DataTypes) => {
    const Commercant = sequelize.define('Commercant', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        agent_id : {
            type: DataTypes.INTEGER,
        },
        prenom: {
            type: DataTypes.STRING
        },
        nom: {
            type: DataTypes.STRING
        },
        revenu_journalier: {
            type: DataTypes.INTEGER
        },
        last_update: {
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
        },
        secteur: {
            type: DataTypes.STRING
        },
        agent_email: {
            type: DataTypes.STRING
        }
    }, {
        
        timestamps: false
    });

    /* Site.associate = function(models) {
        models.Site.belongsTo(models.Adresse, {foreignKey: 'id_adresse', as: 'adresse'});
        models.Site.belongsTo(models.Filiale, {foreignKey: 'id_site_production', as: 'site_production'});
        models.Site.belongsToMany(models.Types_Batiment, {through: 'Sites_Types_Batiment',
            foreignKey: 'id_site', otherKey: 'id_type_batiment', as: 'types_batiments'});
    };*/

    return Commercant;
};
