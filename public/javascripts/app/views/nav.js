define(['backbone', 'hbs!templates/nav'], function(Backbone, template) {
    return Backbone.View.extend({
        el: '#nav',
        template: template,
        render: function() {
            this.$el.html(this.template([
                { href: '#', label: 'Home' },
                { href: '#list', label: 'List of users' },
                { href: '#create', label: 'Create user' }
            ]))
        },
        activateLink: function(route) {
            var links = this.$('.nav a')
              , target = this.$('.nav a[href="#' + route + '"]');

            links.parent().removeClass('active');
            target.parent().addClass('active');
        }
    })
});