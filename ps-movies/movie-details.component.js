/**
 * Created by Roxanne on 08/07/2016.
 */
(function () {
    'use strict';

    var module = angular.module('psMovies');

    function controller() {
        var model = this;

        model.$routerOnActivate = function (next) {
            model.id = next.params.id;

        };
    }

    module.component('movieDetails', {
        templateUrl: 'ps-movies/movie-details.component.html',
        $routeConfig: [
            {
                path: '/overview',
                component: 'movieOverview',
                name: 'Overview'
            },
            {
                path: '/cast',
                component: 'movieCast',
                name: 'Cast'
            },
            {
                path: '/director',
                component: 'movieDirector',
                name: 'Director'
            }],
        controllerAs: 'model',
        controller: [controller]
    });

    module.component('movieOverview',{template:'Movie Overview'});
    module.component('movieCast',{template:'Movie Cast'});
    module.component('movieDirector',{template:'Movie Director'});
    
}());