var express = require('express');
var restaurants = require('./controllers/restaurants.ctrl');
var categories = require('./controllers/categories.ctrl');
var menuItems = require('./controllers/menuitems.ctrl');
var purchaseEmail = require('./controllers/purchaseEmail.ctrl');
var purchase = require('./controllers/purchase.ctrl');

var router = express.Router();
router.use(function(req, res, next) {
    console.log('inside api router!');
    next();
});

router.use('/restaurants', restaurants);
router.use('/categories', categories);
router.use('/menuitems', menuItems);
router.use('/purchase_email', purchaseEmail);
router.use('/purchase', purchase);


module.exports = router;