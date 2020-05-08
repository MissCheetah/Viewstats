var models = require('../models');
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer(
    {
        //multer settings 
        storage: storage
    }).single('file');

/*  var include = [
    {model: models.Adresse, as: 'adresse'},
    {model: models.Filiale, as: 'site_production'},
    {model: models.Types_Batiment, as: 'types_batiments'},
];
 */

router.post('/upload-img', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    upload(req, res, function (err) {
        if (err) {
            res.json({error_code: 1, err_desc: err});
            return;
        }
        res.json({error_code: 0, err_desc: null});
    });
});


/* GET commercants */
router.get('/', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.Commercant.findAll({where: req.query}).then(function (commercants) {
        res.send(commercants);
    });
});

/* POST commercants */

router.post('/create', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.Commercant.create(req.body).then(function (commercant) {
        res.send(commercant);
    });
});
/*
router.post('/create', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.body.nom ==""|| req.body.secteur=="") {
        res.status(400).send({
            status: false,
            message: ''
        });
    } else {
        commercants.create({
            prenom: req.body.prenom,
            nom: req.body.nom,
            revenu_journalier: req.body.revenun_journalier,
            last_update: req.body.last_update,
            imgsrc: req.body.imgsrc,
            ville: req.body.ville,
            code_postal: req.body.code_postal
        }).then((commercant) => res.status(201).send(commercant)).catch((error) => {
            console.log(error);
            res.status(400).send(error);

        });
    }
});


/* PATCH users */
router.post('/update', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.Commercant.update(req.body, {where: {id: req.body.id}}).then(function (commercants) {
        res.send(commercants);
    });
});


/* DELETE commercants */
router.get('/delete/:id', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.params.id) {
        models.Commercant.destroy({where: {id: req.params.id}}).then(function () {
            res.send([1]);
        });
    } else {
        res.send('Error');
    }

});

module.exports = router;
