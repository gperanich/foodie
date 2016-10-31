var express = require('express');
var auth = require('../middleware/auth.mw');
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var db = require('../config/db');

var router = express.Router();

// Collection url for getting all restaurants
router.route('/')
    .get(function(req, res) {
        console.log('getting restaurants');
        console.log(db);
        db.findAll('restaurants').toArray(function(err, restaurants) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(restaurants);
            }
        });
    });

// Getting restaurant info using id
router.route('/:id')
    .get(function(req, res) {
        db.query('restaurants', {_id: new ObjectId(req.params.id)}).toArray(function(err, restaurants) {
            if (err) {
                res.sendStatus(500);
            } else {
                console.log(restaurants);
                res.send(restaurants);
            }
        })
    })

module.exports = router;
