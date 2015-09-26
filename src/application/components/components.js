
'use strict';

define(function(require){

    var components = angular.module('app.components', []);

    //Bootstrap directives to components module
    require('components/main/main')(components);
    require('components/control-panel/control-panel')(components);
    require('components/framedata-table/framedata-table')(components);
    return components;
});