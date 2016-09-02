'use strict';

/**
 * @ngdoc overview
 * @name siteApp
 * @description
 * # siteApp
 *
 * Main module of the application.
 */
angular
  .module('siteApp', [
    'ngRoute',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/imageGallery', {
        templateUrl: 'views/imagegallery.html',
        controller: 'ImagegalleryCtrl',
        controllerAs: 'imageGallery'
      })
      .when('/carouselTry', {
        templateUrl: 'views/carouselTry.html',
        controller: 'carouselTryCtrl',
        controllerAs: 'carouselTry'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('siteApp').controller('navBarCtrl', ['$scope', '$location', function($scope, $location){
   $scope.isActive = function(paramViewLocation){
    var blnActive = (paramViewLocation === $location.path());
     return blnActive;
   };
}]);

















