'use strict';

/**
 * @ngdoc directive
 * @name seriesng1App.directive:extrainfo
 * @description
 * # extrainfo
 */
angular.module('seriesng1App')
  .directive('extraInfo', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        
        switch(attrs.status) {
          case "Running":
            element.addClass("alert alert-success");
            break;

          case "In Development":
            element.addClass("alert alert-info");
            break;

          case "Ended":
            element.addClass("alert alert-danger");
            break;
        };
      }
    };
  });
