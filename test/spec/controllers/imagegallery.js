'use strict';

describe('Controller: ImagegalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('siteApp'));

  var ImagegalleryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImagegalleryCtrl = $controller('ImagegalleryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ImagegalleryCtrl.awesomeThings.length).toBe(3);
  });
});
