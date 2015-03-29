define(['marionette', 'hbs!templates/nav'], function(Marionette, template) {
    return Marionette.ItemView.extend({
        template: template,
        templateHelpers: {
            routes: [
                { href: '#/', route: 'home', label: 'Home' },
                { href: '#/list', route: 'list', label: 'List of users' },
                { href: '#/create', route: 'create', label: 'Create user' }
            ]
        },
        activateLink: function(route) {
            var links = this.$('.nav a'),
                target = this.$('.nav a[data-route="' + route + '"]');

            links.parent().removeClass('active');
            target.parent().addClass('active');
        }
    });
});