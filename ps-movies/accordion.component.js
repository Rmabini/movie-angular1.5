/**
 * Created by Roxanne on 10/07/2016.
 */

(function () {
    'use strict';

    var module = angular.module('psMovies');


    function accordionCtrl() {
        var model = this;

        var panels = [];

        model.selectPanel = function (panel) {
            for (var p in panels) {
                if (panel === panels[p]) {
                    panels[p].turnOn();
                } else {
                    panels[p].turnOff();
                }

            }

        };

        model.addPanel = function (panel) {
            panels.push(panel);
            if (panels.length > 0) {
                panels[0].turnOn();
            }
        };
    }

    module.component('accordion',
        {
            transclude: true,
            template: '<div class="panel-group" ng-transclude></div>',
            controllerAs: 'model',
            controller: [accordionCtrl]
        });


    function accordionPanelCtrl() {
        var model = this;

        model.selected = false;

        model.$onInit = function () {
            model.parent.addPanel(model);
        };

        model.turnOn = function () {
            model.selected = true;
        };

        model.turnOff = function () {
            model.selected = false;
        };

        model.select = function () {
            model.parent.selectPanel(model);
        };

    }

    module.component('accordionPanel', {
        controllerAs: 'model',
        controller: accordionPanelCtrl,
        bindings: {heading: '@'},
        require: {
            parent: '^accordion'
        },
        transclude: true,
        templateUrl: 'ps-movies/accordion-panel.component.html'
    });

}());