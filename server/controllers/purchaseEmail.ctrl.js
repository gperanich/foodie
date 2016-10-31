var express = require('express');
var emailSvc = require('../services/email.svc');

var router = express.Router();

router.route('/')
    .post(function(req, res) {
        emailSvc.sendEmail(req.body.toAddress, req.body.fromAddress, req.body.subject, req.body.emailBody)
        .then(function(success) {
            console.log(success);
            res.send('Email Sent!');
        }, function(err) {
            console.log(err);
            res.sendStatus(500);
        });
    });

module.exports = router;