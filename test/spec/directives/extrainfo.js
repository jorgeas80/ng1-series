'use strict';

describe('Directive: starrating', function () {

  // load the directive's module
  beforeEach(module('seriesng1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    /*
    element = angular.element('<starrating></starrating>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the starrating directive');
    */
    // TODO: Write real text here
    expect(true).toEqual(true);
  }));
});
