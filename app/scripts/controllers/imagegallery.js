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
        openCarousel:function(paramIndex){ // close modal relative to index
            var intIndex = paramIndex;
            $scope.dataGallery[intIndex].show = !$scope.dataGallery[intIndex].show;
        }
    };
    $scope.dataGallery = [];
    $scope.dataGallery[0] = {path:'path to car image',
        description:'63 VW',
        year:'1963',
        model:'Kombi',
        id:0,
        show:false
    };
    $scope.dataGallery[1] = {path:'path to car image',
        description:'64 Chrysler',
        year:'1964',
        model:'Pacifica',
        id:1,
        show:false
    };    
    $scope.dataGallery[2] = {path:'path to car image',
        description:'65 Dodge',
        year:'1964',
        model:'Coronet',
        id:2,
        show:false
    };        
    $scope.dataGallery[3] = {path:'path to car image',
        description:'65 Edsel',
        year:'1965',
        model:'Echo',
        id:3,
        show:false
    };
    $scope.openCarousel = _fnc.openCarousel;



  }]);
