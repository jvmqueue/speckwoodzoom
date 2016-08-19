'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the siteApp
 */
angular.module('siteApp').controller('AboutCtrl', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.myClass = 'isActive';
    $scope.activeAbout = 'isActive';
  }); // End controller
