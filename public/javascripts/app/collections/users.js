define(['backbone', 'models/user'], function(Backbone, User) {
    return Backbone.Collection.extend({
        url: "/api/users",
        model: User
    })
});