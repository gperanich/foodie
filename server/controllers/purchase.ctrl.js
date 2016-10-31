var express = require('express');
var stripeSvc = require('../services/stripe.svc');

var router = express.Router();

router.route('/')
    .post(function(req, res) {
        var amount = Number(req.body.amount);
        amount *= 100;

        stripeSvc.chargeCard(req.body.token, amount, 'Purchase')
            .then(function(success) {
                console.log(success);
                res.status(201).send(success);
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
            });
    });

module.exports = router;