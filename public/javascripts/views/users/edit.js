define(
['backbone', 'underscore', 'views/users/create', 'hbs!templates/users/edit', 'helpers/popup'],
function(Backbone, _, CreateView, template, popup) {
    return CreateView.extend({
        template: template,

        navigate: function() {
            popup.alert('Success', 'User was successfully updated');
            Backbone.history.navigate('list', { trigger: true });
        }
    })
});