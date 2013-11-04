define(
['backbone', 'models/user', 'collections/users', 'helpers/alert',
 'views/nav', 'views/users/list', 'views/users/create'],
function(Backbone, User, Users, Alert, NavView, ListView, CreateView) {
    return Backbone.Router.extend({

        initialize: function() {
            var view = new NavView();
            view.render();
            this.on('route', view.activateLink, view);

            this.$content = Backbone.$('#content')
        },

        routes: {
            "": "home",
            "list(/:page)": "list",
            "create": "create"
        },

        home: function() {
            this.$content.html('<h1>Home Page</h1>')
        },

        list: function(page) {
            var users = new Users()
              , view = new ListView({ collection: users });

            users.fetch({ data: { page: page || 1 } });
            users.on('sync', function() {
                this.$content.html(view.render().el)
            }, this)
        },

        create: function() {
            var user = new User()
              , view = new CreateView({ model: user });

            user.on('sync', function() {
                Alert.success('User was successfully saved');
                this.navigate('list', { trigger: true })
            }, this);

            this.$content.html(view.render().el)
        }
    })
});