define(['marionette', 'views/nav'], function(Marionette, NavView) {
    return Marionette.LayoutView.extend({
        el: 'body',
        regions: {
            navRegion: '#nav',
            contentRegion: '#content'
        },
        initialize: function() {
            this.navRegion.show(new NavView());
        }
    });
});