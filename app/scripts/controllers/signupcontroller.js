'use strict';

/**
 * @ngdoc function
 * @name seriesng1App.controller:SignupcontrollerCtrl
 * @description
 * # SignupcontrollerCtrl
 * Controller of the seriesng1App
 */
angular.module('seriesng1App')
  .controller('SignupcontrollerCtrl', function ($auth, $location, $log) { 
    var vm = this;

    vm.signup = function() {
      $auth.signup ({
        email: vm.email,
        password: vm.password
      })

      .then(function() {
        // Login success: redirect to private area
        $location.path('/private');
      })

      .catch(function(response) {
        $log.error(response);
      })
    }
  });
