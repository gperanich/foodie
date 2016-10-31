angular.module('FoodieWeb', ['ngRoute', 'ngResource', 'FoodieWeb.controllers', 'FoodieWeb.factories', 'FoodieWeb.directives'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .when('/restaurants', {
        templateUrl: 'views/restaurantlist.html',
        controller: 'RestaurantsController'
    })
    .when('/restaurants/:id', {
        templateUrl: 'views/restaurantmenu.html',
        controller: 'RestaurantMenuController'
    })
    .when('/order_confirmation', {
        templateUrl: 'views/orderConfirm.html',
        controller: 'OrderConfirmController'
    })
    .when('/howitworks', {
        templateUrl: 'views/howItWorks.html',
        controller: 'HowItWorksControllers'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);