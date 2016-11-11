'use strict';

describe('Filter: inmyseries', function () {

  // load the filter's module
  beforeEach(module('seriesng1App'));

  // initialize a new instance of the filter before each test
  var inmyseries;
  beforeEach(inject(function ($filter) {
    inmyseries = $filter('inmyseries');
  }));

  it('should return the input prefixed with "inmyseries filter:"', function () {
    var text = 'angularjs';
    expect(inmyseries(text)).toBe('inmyseries filter: ' + text);
  });

});
