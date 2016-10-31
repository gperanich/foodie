angular.module('FoodieWeb.controllers', [])
.controller('WelcomeController', ['$scope', '$location', function($scope, $location) {
    $scope.seeRestaurants = function() {
        $location.url('/restaurants');
    }
}])

.controller('RestaurantsController', ['$scope', 'Restaurants', function($scope, Restaurants) {
    $scope.restaurants = Restaurants.query();
}])

.controller('RestaurantMenuController', ['$scope', 'Categories', 'MenuItems', '$routeParams', 'Purchase', 'Email', '$location', function($scope, Categories, MenuItems, $routeParams, Purchase, Email, $location) {
    $scope.categories = Categories.query({ storeid: $routeParams.id });
    $scope.checkoutHide = true;

    $scope.showMenu = function(category) {
        console.log(category);
        $scope.categoryMenuItems = MenuItems.filter({ categoryname: category.name });
        $scope.menuHide = false;
    }
    $scope.checkout = function() {
        $scope.checkoutHide = false;
    }

    $scope.confirmPurchase = function() {
        Stripe.card.createToken({
            number: $scope.cardNumber,
            cvc: $scope.cvc,
            exp_month: $scope.expMonth,
            exp_year: $scope.expYear
        }, function (status, response) {
            if (response.error) {
                console.log(response.error);
            } else {
                var token = response.id;
                var transactionData = {
                    amount: $scope.orderTotal,
                    token: token
                }
                var purchase = new Purchase(transactionData);
                purchase.$save(function(success) {
                    console.log(success);

                    $location.url('/order_confirmation');
                });
            }
        });
    }
                

    $scope.currentOrder = [];
    $scope.addItem = function(menuitem) {
        console.log(menuitem);

        var orderMenuItem = {
            name: menuitem.name,
            price: menuitem.price
        };
        $scope.currentOrder.push(orderMenuItem);
        console.log($scope.currentOrder);

        $scope.orderTotal = sum();
        console.log($scope.orderTotal);
    }

    $scope.deleteItem = function(index) {
        $scope.currentOrder.splice(index, 1);

        $scope.orderTotal = sum();
    }

    var sum = function() {
        var total = 0;
        for (var i=0; i < $scope.currentOrder.length; i++) {
            total += $scope.currentOrder[i].price;
        }
        console.log(total);
        return total;
    }

    $scope.orderTotal = sum();
}])

.controller('OrderConfirmController', ['$scope', function($scope) {
    console.log('confirmed order!');
}])

.controller('HowItWorksController', ['$scope', function($scope) {
    console.log('it works!');
}])