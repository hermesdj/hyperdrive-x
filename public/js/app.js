'use strict';

angular.module('hyperdrive', 
		['ngCookies', 
		 'ngResource', 
		 'ngRoute', 
		 'ui.bootstrap', 
		 'ui.route', 
		 'hyperdrive.system', 
		 'hyperdrive.colony',
		 'hyperdrive.research']);

angular.module('hyperdrive.system', []);
angular.module('hyperdrive.colony', []);
angular.module('hyperdrive.research', []);