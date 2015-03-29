define(
['marionette', 'hbs!templates/users/list', 'behaviors/confirm'],
function(Marionette, template, Confirm) {
    return Marionette.ItemView.extend({
        template: template,
        ui: {
            confirm: ".remove-confirmation"
        },
        behaviors: {
            Confirm: {
                behaviorClass: Confirm
            }
        }
    });
});