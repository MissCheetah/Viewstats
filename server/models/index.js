'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json');
const db = {};

let server;

server = new Sequelize("mysql://admin:admin@localhost:8889/Viewstats");
console.log(__dirname);

// CONFIG MODELES NEW_PROD
fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = server['import'](path.join(__dirname, file));
      db[model.name] = model;
    });

db.sequelize = server;
db.Sequelize = Sequelize;

module.exports = db;
