'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:ImagegalleryCtrl
 * @description
 * # ImagegalleryCtrl
 * Controller of the siteApp
 */
angular.module('siteApp')
  .controller('ImagegalleryCtrl', ['$scope', function($scope){
    this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
    var _fnc = {
        openCarousel:function(){
            console.group('OPEN CAROUSEL');
                console.log(':\t', 'Reached');
               console.groupEnd(); 
        }
    };
    $scope.dataGallery = [];
    $scope.dataGallery[0] = {path:'path to car image',
        description:'63 VW',
        year:'1963',
        model:'Kombi'
    };
    $scope.dataGallery[1] = {path:'path to car image',
        description:'64 Chrysler',
        year:'1964',
        model:'Pacifica'
    };    
    $scope.dataGallery[2] = {path:'path to car image',
        description:'65 Dodge',
        year:'1964',
        model:'Coronet'
    };        
    $scope.dataGallery[3] = {path:'path to car image',
        description:'65 Edsel',
        year:'1965',
        model:'Echo'
    };
    $scope.openCarousel = _fnc.openCarousel;




  }]);
