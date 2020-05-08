var models  = require('../models');
var express = require('express');
var router  = express.Router();
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

/* GET users */
router.get('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    models.User.findAll({where: req.query}).then(function(users) {
        res.send(users);
    });
});
router.get('/:id', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.User.findById(req.params.id).then(function(user) {
        res.send(user);
    });
});

/* POST users*/
router.post('/create', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader( "Access-Control-Allow-Headers", "*");
    console.log(req.body);
    models.User.create(req.body).then(function(user) {
        res.send(user);
    });
});

/* PATCH users*/
router.post('/update', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.User.update(req.body, {where: {id: req.body.id}}).then(function(users) {
        res.send(users);
    });
});

router.post('/resetPassword', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.User.update(req.body, {where: {id: req.query.id}}).then(function(users) {
        res.send(users);
    });
});

router.post('/updatePassword', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    models.User.update(req.body, {where: req.query}).then(function(users) {
        res.send(users);
    });
});


/* DELETE users */
router.get('/delete/:id', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.params.id) {
        models.User.destroy({where: {id: req.params.id}}).then(function() {
            res.send([1]);
        });
    } else {
        res.send('Error');
    }

});

module.exports = router;
