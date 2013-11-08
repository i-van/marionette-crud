define(['backbone', 'underscore', 'views/users/create', 'hbs!templates/users/edit'], function(Backbone, _, CreateView, template) {
    return CreateView.extend({
        template: template
    })
});