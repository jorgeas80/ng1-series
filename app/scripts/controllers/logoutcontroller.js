'use strict';

/**
 * @ngdoc function
 * @name seriesng1App.controller:LogoutcontrollerCtrl
 * @description
 * # LogoutcontrollerCtrl
 * Controller of the seriesng1App
 */
angular.module('seriesng1App')
  .controller('LogoutcontrollerCtrl', function ($auth, $location, $log) {
    $auth.logout()
      .then(function() {
        // Success logout
        $location.path("/");
      })

      .catch(function(response) {
        $log.error(response);
      })
  });
