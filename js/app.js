var myApp = angular.module('myApp', [ //listing the dependencies (incl. other controllers)
        'ngRoute',
        'artistControllers'
    ]);
    
    myApp.config(['$routeProvider', function($routeProvider){ //including dependencies in the array
        $routeProvider.
            when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'ListController'
            }).
            when('/details/:itemId', {
                templateUrl: 'partials/details.html',
                controller: 'DetailController'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);