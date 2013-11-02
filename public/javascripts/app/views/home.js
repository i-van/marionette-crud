define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        el: '#content',
        render: function() {
            this.$el.html('<h1>Home Page</h1>')
        }
    })
});