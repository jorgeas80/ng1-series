'use strict';

/**
 * @ngdoc service
 * @name seriesng1App.tvmaze
 * @description
 * # tvmaze
 * Service in the seriesng1App.
 */
angular.module('seriesng1App')
  .factory('tvmaze', function ($http, url, dburl) {

    var f = {};

    f.getReleasesOf = function (date) {

      // Get str representation of date
      var mm = date.getMonth() + 1; // getMonth() is zero-based
      var dd = date.getDate();

      if (mm < 10)
        mm = '0' + mm;

      if (dd < 10)
        dd = '0' + dd;

      var strDate = [date.getFullYear(), mm, dd].join('-');

      var fullUrl = url + "&date=" + strDate;
      return $http.get(fullUrl);
    }

    f.addSeries = function (id, title, rating, img_url) {

    }

    f.getSeries = function(id) {
      return $http.get(dburl + "/" + id);
    }

    return f;

  });
