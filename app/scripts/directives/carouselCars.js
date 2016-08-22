'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:ImagegalleryCtrl
 * @description
 * # ImagegalleryCtrl
 * Controller of the siteApp
 */
angular.module('siteApp').directive('tagCarousel',function(){
    return{
        scope:{data:'=info'},
        templateUrl:'directives/carouselCars.html'
    };    
}); // End tagCarousel
