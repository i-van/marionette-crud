define(['backbone', 'hbs!templates/users/list'], function(Backbone, template) {
    return Backbone.View.extend({
        template: template,
        render: function() {
            this.$el.html(this.template(this.collection.toJSON()));
            return this
        }
    })
});