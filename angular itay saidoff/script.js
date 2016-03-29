// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/beer', {
                templateUrl : 'beer.html',
                controller  : 'beerController'
            })

            // route for the contact page
            .when('/whiskey', {
                templateUrl : 'whiskey.html',
                controller  : 'whiskeyController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Welcome to the alcohol shop!';
            $scope.image ='home.jpg';

    });

    scotchApp.controller('beerController', function($scope) {
        $scope.message = 'Beers are great to have with friends!'
        $scope.image ='beer.jpg';
;
    });

    scotchApp.controller('whiskeyController', function($scope) {
        $scope.message = 'Whiskey is water filled with sunlight'
         $scope.image ='whiskey.jpeg';
;
    });

                