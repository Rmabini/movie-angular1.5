/**
 * Created by Roxanne on 08/07/2016.
 */
(function () {
    'use strict';

    var module = angular.module('psMovies');

    function fetchMovies($http) {
        return $http.get('movies.json').then(function (response) {
            return response.data;
        });
    }

    function controller($http) {
        var model = this;

        model.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                model.movies = movies;
            });
        };

        model.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.setRating = function (movie, newValue) {
            movie.rating = newValue;
        };

        model.goTo = function (id) {
            model.$router.navigate(['Details', {id: id}, 'Overview']);
        };

        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };
    }

    module.component('movieList',
        {
            templateUrl: 'ps-movies/movie-list.component.html',
            controllerAs: 'model',
            bindings: {
                $router: '<'
            },
            controller: ['$http', controller]
        });


}());