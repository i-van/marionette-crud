define(['backbone'], function(Backbone) {
    return Backbone.Router.extend({

        initialize: function() {
            this.on("route", function() {
                console.log(arguments);
            });
        },

        routes: {
            "create": "create",
            "list": "list",
            "*actions": "default"
        }
    })
});