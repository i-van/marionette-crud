define(['../../bower_components/backbone/backbone'], function(Backbone) {
    return Backbone.Model.extend({
        urlRoot: "/api/users",
        idAttribute: "_id"
    })
});