define(['marionette', 'underscore'], function(Marionette, _) {
    return Marionette.ItemView.extend({
        template: _.template('<h1>Home</h1>')
    });
});