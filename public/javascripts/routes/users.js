define(
['marionette', 'models/user', 'collections/users', 'views/users/home', 'views/users/list', 'views/users/create', 'views/users/edit'],
function(Marionette, User, Users, HomeView, ListLayout, CreateView, EditView) {
    return Marionette.AppRouter.extend({
        initialize: function(options) {
            this.app = options.app;
        },
        routes: {
            "": "homeAction",
            "list(/:page)": "listAction",
            "create": "createAction",
            "edit/:id": "editAction",
            "remove/:id": "remove"
        },

        homeAction: function() {
            this.app.rootView.navRegion.currentView.activateLink('home');
            this.app.rootView.contentRegion.show(new HomeView());
        },

        listAction: function(page) {
            var contentRegion = this.app.rootView.contentRegion;
            this.app.rootView.navRegion.currentView.activateLink('list');

            new Users().fetch({
                data: { page: page || 1 },
                success: function(users) {
                    contentRegion.show(new ListLayout({ collection: users }));
                }
            });
        },

        createAction: function() {
            this.app.rootView.navRegion.currentView.activateLink('create');
            this.app.rootView.contentRegion.show(new CreateView({ model: new User() }));
        },

        editAction: function(id) {
            var contentRegion = this.app.rootView.contentRegion;

            new User({ _id: id }).fetch({
                success: function(user) {
                    contentRegion.show(new EditView({ model: user }));
                }
            });
        }
    });
});