'use strict';

angular.module('hyperdrive.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Colonies',
        'link': 'colony'
    },
    {
    	'title': 'Research',
    	'link': 'research'
    }];
    
    $scope.isCollapsed = false;
}]);