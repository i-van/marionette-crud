define(['marionette', 'jquery', 'helpers/popup'], function(Marionette, $, popup) {
    return Marionette.Behavior.extend({
        events: {
            "click @ui.confirm": "confirmation"
        },
        confirmation: function(e) {
            var $el = $(e.currentTarget),
                title = $el.data('title'),
                message = $el.data('message'),
                url = $el.attr('href');

            popup.confirm(title, message, function(value) {
                value && (window.location = url);
            });

            return false;
        }
    });
});