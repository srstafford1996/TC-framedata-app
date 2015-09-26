
'use strict';


define(function(require){


    require('application/components/components.js');

    var app = angular.module('app', ['ui.bootstrap','ui.router','app.components']);
    
    app.config( function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('dashboard', {
            url: '/',
            template: '<tc-main> </tc-main>'
        });

    });


});