define(['backbone', 'hbs!templates/nav'], function(Backbone, template) {
    return Backbone.View.extend({
        el: '#nav',
        template: template,
        events: {
            "click .nav a": "activateLink"
        },
        render: function() {
            this.$el.html(this.template([
                { href: '#', label: 'Home' },
                { href: '#list', label: 'List of users' },
                { href: '#create', label: 'Create user' }
            ]));
            this.$('.nav a[href="#' + location.hash.replace('#', '') + '"]').parent()
                .addClass('active')
        },
        activateLink: function(event) {
            var links = this.$('.nav a')
              , target = this.$(event.target);

            links.parent().removeClass('active');
            target.parent().addClass('active');
        }
    })
});