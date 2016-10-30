'use strict';

/**
 * @ngdoc filter
 * @name seriesng1App.filter:startfrom
 * @function
 * @description
 * # startfrom
 * Filter in the seriesng1App.
 */
angular.module('seriesng1App')
  .filter('startFrom', function () {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
  });
