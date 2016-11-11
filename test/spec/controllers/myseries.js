'use strict';

describe('Controller: MyseriesCtrl', function () {

  // load the controller's module
  beforeEach(module('seriesng1App'));

  var MyseriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyseriesCtrl = $controller('MyseriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyseriesCtrl.awesomeThings.length).toBe(3);
  });
});
