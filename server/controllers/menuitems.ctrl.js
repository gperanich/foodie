var express = require('express');
var auth = require('../middleware/auth.mw');
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var db = require('../config/db');

var router = express.Router();

// Collection for all menu items per category
router.route('/')
    .get(function(req, res) {
        if (req.query.categoryname) {
            db.query('menuItems', { categoryname: req.query.categoryname }).toArray(function(err, menuItems) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.send(menuItems);
                }
            });
        }
    });

// Collection for menu items by category id
router.route('/:id')
    .get(function(req, res) {
        db.query('menuItems', { categoryname: req.params.id }).toArray(function(err, menuItems) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(menuItems);
            }
        });
    });

module.exports = router;