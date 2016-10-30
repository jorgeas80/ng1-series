/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name seriesng1App.controller:MenubarCtrl
 * @description
 * # MenubarCtrl
 * Controller of the seriesng1App
 */
angular.module('seriesng1App')
  .controller('MenubarCtrl', function ($rootScope) {

    // Capturing this environment at first: https://johnpapa.net/angularjss-controller-as-and-the-vm-variable/
    var vm = this;

    // To filter search
    vm.searchTerm = {};

    // Method called when the input search changes.
    vm.emitSearchTerm = function() {

      // Send a message to a controller which is out of our hierarchy
      $rootScope.$emit('MenubarCtrl:rootScope:emit', vm.searchTerm);
    }


  });
