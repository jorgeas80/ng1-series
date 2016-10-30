/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

'use strict';

/**
 * @ngdoc function
 * @name seriesng1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seriesng1App
 */
angular.module('seriesng1App')
  .controller('MainCtrl', function ($rootScope, $scope, tvmaze) {

    var vm = this;

    // Will store the array of episodes
    vm.series_today = [];


    // Pagination stuff
    vm.viewby = 10;
    vm.totalItems = 0;
    vm.currentPage = 1;
    vm.itemsPerPage = vm.viewby;

    vm.itemsPerPageOptions = [3, 5, 10, 20, 30, 40, 50];

    vm.showPagination = true;


    // Get JSON with today releases in USA
    tvmaze.getTodayReleases().then(
      // successful
      function (response) {
        vm.series_today = response.data;
        vm.totalItems = response.data.length;

        console.log("Hay " + vm.totalItems + " series en la lista");
      },

      // Error
      function (response) {
        vm.series_today = [];
      }
    )

    vm.pageChanged = function () {
      console.log('Page changed to: ' + vm.currentPage);
    };

    vm.setItemsPerPage = function (num) {
      vm.itemsPerPage = num;
      vm.currentPage = 1; //reset to first page
    }


    // For template
    vm.d = Date.now();

    // Those are to allow ordering the result table
    vm.orderBy = "show.name";
    vm.reverse = false;

    // This is to filter the search table
    vm.searchTerm = {};

    // Listen to menubarctrl, which contains the search term
    var listener = $rootScope.$on('MenubarCtrl:rootScope:emit', function (event, data) {
      vm.searchTerm = data;

      // Disable pagination for searchs. Improvement: also paginate the search results
      vm.showPagination = vm.searchTerm.show.name.length <= 0;
    });

    // Need to explicitly destroy listener
    $scope.$on('$destroy', listener);
  });
