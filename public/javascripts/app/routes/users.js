define(
['backbone', 'models/user', 'collections/users', 'views/nav', 'views/home', 'views/users/list', 'views/users/create'],
function(Backbone, User, Users, NavView, HomeView, ListView, CreateView) {
    return Backbone.Router.extend({

        initialize: function() {
            var view = new NavView();
            view.render()
        },

        routes: {
            "": "home",
            "list(/:page)": "list",
            "create": "create"
        },

        home: function() {
            var view = new HomeView();
            view.render()
        },

        list: function(page) {
            var users = new Users()
              , view = new ListView({ collection: users });

            users.fetch({
                data: { page: page || 1 },
                success: function() {
                    view.render()
                }
            })
        },

        create: function() {
            var user = new User()
              , view = new CreateView({ model: user });

            view.render();
        }
    })
});