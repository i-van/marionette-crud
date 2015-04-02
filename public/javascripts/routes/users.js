define(
['marionette', 'backbone', 'models/user', 'collections/users', 'views/users/home', 'views/users/list', 'views/users/create', 'views/users/edit', 'helpers/popup'],
function(Marionette, Backbone, User, Users, HomeView, ListLayout, CreateView, EditView, popup) {
    return Marionette.AppRouter.extend({
        initialize: function(options) {
            this.app = options.app;
        },
        routes: {
            "": "homeAction",
            "list(/:page)": "listAction",
            "create": "createAction",
            "edit/:id": "editAction",
            "remove/:id": "removeAction"
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
        },

        removeAction: function(id) {
            new User({ _id: id }).destroy({
                success: function() {
                    popup.alert('Success', 'User was successfully removed');
                    Backbone.history.navigate('list', { trigger: true });
                },
                error: function() {
                    popup.alert('Failure', 'Something went wrong');
                    Backbone.history.navigate('list', { trigger: true });
                }
            });
        }
    });
});