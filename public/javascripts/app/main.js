
require.config({
    baseUrl: '/javascripts/app',
    hbs : {
        helperPathCallback: function(name) {
            return 'helpers/' + name
        }
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        backbone: '../../bower_components/backbone/backbone',
        underscore: '../../bower_components/underscore/underscore',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        hbs: '../../bower_components/require-handlebars-plugin/hbs',
        handlebars: '../../bower_components/require-handlebars-plugin/hbs/handlebars'
    }
});

require(['backbone', 'routes/users'], function(Backbone, Router) {
    new Router();
    Backbone.history.start()
});
