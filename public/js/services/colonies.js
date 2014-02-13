'use strict';

//Articles service used for articles REST endpoint
angular.module('hyperdrive.colony').factory('Colonies', ['$resource', function($resource) {
    return $resource('colony/:colonyId', {
        colonyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);