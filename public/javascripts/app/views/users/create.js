define(['backbone', 'hbs!templates/users/create'], function(Backbone, template) {
    return Backbone.View.extend({
        el: '#content',
        template: template,
        render: function() {
            this.$el.html(this.template(this.model.toJSON()))
        }
    })
});