/**
 * Created by Roxanne on 08/07/2016.
 */
(function () {
    'use strict';

    var module = angular.module('psMovies');

    function buildEntries(value, max) {

        var entries = [];

        for (var i = 1; i <= max; i++) {
            var icon = i <= value ? 'glyphicon-star' : 'glyphicon-star-empty';
            entries.push(icon);
        }

        return entries;
    }

    function controller() {
        var model = this;

        model.$onInit = function () {
            model.entries = buildEntries(model.value, model.max);
        };

        model.$onChanges = function () {
            model.entries = buildEntries(model.value, model.max);
        };

    }

    module.component('movieRating', {
        templateUrl: 'ps-movies/movie-rating.components.html',
        bindings: {
            value: '<',
            max: '<',
            setRating: '&'
        },
        controllerAs: 'model',
        controller: [controller]
    });

}());