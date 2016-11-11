'use strict';

/**
 * @ngdoc function
 * @name seriesng1App.controller:LogincontrollerCtrl
 * @description
 * # LogincontrollerCtrl
 * Controller of the seriesng1App
 */
angular.module('seriesng1App')
  .controller('LogincontrollerCtrl', function ($auth, $location, $log) {
    var vm = this;

    vm.login = function() {
      $auth.login({
        email: vm.email,
        passwod: vm.password
      })
      
      .then(function() {
        // Login success
        $location.path('/private');
      })

      .catch(function(response) {
        $log.error(response);
      })
    }
  });
  
