var mongo = require('mongodb').MongoClient;
var db;

mongo.connect('mongodb://localhost:27017/foodieWeb', function(err, database) {
    if (err) {
        console.log(err);
    } else {
        db = database;
    }
});

exports.findAll = function(collectionName) {
    return db.collection(collectionName).find();
}

exports.query = function(collectionName, query) {
    return db.collection(collectionName).find(query);
}
