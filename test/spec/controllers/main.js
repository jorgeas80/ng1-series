'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('seriesng1App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Start with default values', function () {
    var obj = MainCtrl.searchTerm;

    expect(Object.keys(obj).length === 0 && obj.constructor === Object).toBe(true);
    expect(MainCtrl.d).toBe(Date.now());
  });
});
