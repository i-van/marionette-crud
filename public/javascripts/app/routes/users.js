define(
['backbone', 'collections/users', 'views/nav', 'views/home', 'views/users/list'],
function(Backbone, Users, NavView, HomeView, ListView) {
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
            var users = new Users();
            users.fetch({
                data: { page: page || 1 },
                success: function(users) {
                    var view = new ListView({ collection: users });
                    view.render()
                }
            });
        }
    })
});