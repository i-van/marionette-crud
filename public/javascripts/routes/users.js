define(
['marionette', 'models/user', 'collections/users', 'views/users/home', 'views/users/list'],
function(Marionette, User, Users, HomeView, ListLayout) {
    return Marionette.AppRouter.extend({
        initialize: function(options) {
            this.app = options.app;
        },
        routes: {
            "": "homeAction",
            "list(/:page)": "listAction",
            "create": "create",
            "edit/:id": "edit",
            "remove/:id": "remove"
        },

        homeAction: function() {
            this.app.rootView.contentRegion.show(new HomeView());
        },

        listAction: function(page) {
            var contentRegion = this.app.rootView.contentRegion;

            new Users().fetch({
                data: { page: page || 1 },
                success: function(users) {
                    contentRegion.show(new ListLayout({ collection: users }));
                }
            });
        }
    });
});