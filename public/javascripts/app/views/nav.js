define(['backbone', 'hbs!templates/nav'], function(Backbone, template) {
    return Backbone.View.extend({
        el: '#nav',
        template: template,
        render: function() {
            this.$el.html(this.template([
                { href: '#', label: 'Home' },
                { href: '#list', label: 'List of users' },
                { href: '#create', label: 'Create user' }
            ]));
            return this
        },
        activateLink: function() {
            var links = this.$('.nav a')
              , target = this.$('.nav a[href="#' + location.hash.replace('#', '') + '"]');

            links.parent().removeClass('active');
            target.parent().addClass('active');
        }
    })
});