'use strict';

/**
 * @ngdoc component
 * @name seriesng1App.component:starrating
 * @description
 * # starrating
 */
angular.module('seriesng1App')
    .component('inMySeries', {
        template: './scripts/components/inmyseries.component.html',
        bindings: {
            id: "@"
        },
        controller: function (tvmaze) {
            this.inMySeries = undefined;

            tvmaze.getSeries(this.id)
                .then(
                    function(response) {
                        this.inMySeries = true;
                    },

                    function(response) {
                        this.inMySeries = false;
                    }
                )
        }
    });