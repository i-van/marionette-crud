
require.config({
    baseUrl: '/javascripts',
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
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        hbs: '../bower_components/require-handlebars-plugin/hbs',
        handlebars: '../bower_components/require-handlebars-plugin/hbs/handlebars',
        marionette: '../bower_components/marionette/lib/backbone.marionette'
    }
});

require(
['marionette', 'backbone', 'routes/users', 'views/root', 'views/nav'],
function(Marionette, Backbone, Router, RootView, NavView) {
    var app = new Marionette.Application();
    app.rootView = new RootView();

    app.on('before:start', function() {
        app.rootView.navRegion.show(new NavView());
    });

    app.on('start', function() {
        new Router({ app: app });
        Backbone.history.start();
    });

    app.start();
});
