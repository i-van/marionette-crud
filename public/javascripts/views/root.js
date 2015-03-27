define(['marionette'], function(Marionette) {
    return Marionette.LayoutView.extend({
        el: 'body',
        regions: {
            navRegion: '#nav',
            contentRegion: '#content'
        }
    });
});