define(['marionette', 'views/users/home'], function(Marionette, HomeView) {
    return Marionette.AppRouter.extend({
        initialize: function(options) {
            this.app = options.app;
        },
        routes: {
            "": "homeAction",
            "list(/:page)": "list",
            "create": "create",
            "edit/:id": "edit",
            "remove/:id": "remove"
        },

        homeAction: function() {
            this.app.rootView.contentRegion.show(new HomeView());
        }
    });
});