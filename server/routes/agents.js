var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');


/* GET agents */
router.get('/', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.Agent.findAll({where: req.query}).then(function (agents) {
        res.send(agents);
    });
});
router.get('/:id', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.Agent.findById(req.params.id).then(function(user) {
        res.send(user);
    });
});

/* POST users */
router.post('/create', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.Agent.create(req.body).then(function(agent) {
        res.send(agent);
    });
});

/* PATCH users */
router.post('/update', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.Agent.update(req.body, {where: {id: req.body.id}}).then(function(agents) {
        res.send(agents);
    });
});

/* DELETE agents */
router.get('/delete/:id', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.params.id) {
        models.Agent.destroy({where: {id: req.params.id}}).then(function() {
            res.send([1]);
        });
    } else {
        res.send('Error');
    }

});

module.exports = router;
