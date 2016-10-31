var express = require('express');
var auth = require('../middleware/auth.mw');
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var db = require('../config/db');

var router = express.Router();

// Collection url for all categories
router.route('/')
    .get(function(req, res) {
        console.log('got categories');
        db.findAll('menuCategories').toArray(function(err, categories) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(categories);
            }
        });
    });
// get categories by store id
router.route('/:id')
    .get(function(req, res) {
        console.log('getting categories');
        db.query('menuCategories', {_id: new ObjectId(req.params.id)}).toArray(function(err, categories) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(categories);
            }
        });
    });

module.exports = router;