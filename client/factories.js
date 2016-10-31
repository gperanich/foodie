angular.module('FoodieWeb.factories', ['ngResource'])
.factory('Restaurants', ['$resource', function($resource) {
    var r = $resource('http://localhost:3000/api/restaurants/:id', { id:'@id' });
    return r;
}])
.factory('Categories', ['$resource', function($resource) {
    var c = $resource('http://localhost:3000/api/categories', { storeid:'@id' });
    return c;
}])
.factory('MenuItems', ['$resource', function($resource) {
    var m = $resource('http://localhost:3000/api/menuitems/:id', { categorytype:'@id' }, {
        'filter': {
            method: 'GET',
            isArray: true
        }
    });
    return m;
}])
.factory('Purchase', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/purchase/:id', { id:'@id' });
}])
.factory('Email', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/purchase_email/:id', { id:'@id' });
}]);