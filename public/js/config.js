'use strict';

//Setting up route
angular.module('hyperdrive').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/colony', {
        	templateUrl: 'views/colony/view.html'
        }).
        when('/research', {
        	templateUrl: 'views/research/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('hyperdrive').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);