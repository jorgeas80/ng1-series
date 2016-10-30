'use strict';

describe('Controller: MenubarCtrl', function () {

  // load the controller's module
  beforeEach(module('seriesng1App'));

  var MenubarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenubarCtrl = $controller('MenubarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should start with an empty search term', function () {
    var obj = MenubarCtrl.searchTerm;

    expect(Object.keys(obj).length === 0 && obj.constructor === Object).toBe(true);
  });
});
