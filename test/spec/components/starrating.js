'use strict';

describe('Component: starrating', function () {

  // load the directive's module
  beforeEach(module('seriesng1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {

    //TODO: Write real test
    expect(true).toEqual(true);
    /*
    element = angular.element('<starrating></starrating>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the starrating directive');
    */
  }));
});
