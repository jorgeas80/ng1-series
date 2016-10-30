'use strict';

/**
 * @ngdoc service
 * @name seriesng1App.tvmaze
 * @description
 * # tvmaze
 * Service in the seriesng1App.
 */
angular.module('seriesng1App')
  .factory('tvmaze', function ($http, url) {

    var f = {};

    f.getReleasesOf = function(date) {
      var fullUrl = url + "&date=" + date;
      return $http.get(fullUrl);
    }

    return f;

  });
