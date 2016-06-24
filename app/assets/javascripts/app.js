tldr = angular.module('tldr', [
  'templates',
  'ngRoute',
  'controllers',
]);

tldr.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/',
        {
          templateUrl: "index.html",
          controller: 'SummaryController'
        });
  }
]);

controllers = angular.module('controllers', []);
controllers.controller("SummaryController", [ '$scope',
  function($scope) {}
]);
