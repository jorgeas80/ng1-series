'use strict';

describe('Service: dburl', function () {

  // load the service's module
  beforeEach(module('seriesng1App'));

  // instantiate service
  var dburl;
  beforeEach(inject(function (_dburl_) {
    dburl = _dburl_;
  }));

  it('should do something', function () {
    expect(!!dburl).toBe(true);
  });

});
