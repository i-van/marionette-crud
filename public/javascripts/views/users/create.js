define(
['marionette', 'underscore', 'jquery', 'hbs!templates/users/create', 'helpers/popup'],
function(Marionette, _, $, template, popup) {
    return Marionette.ItemView.extend({
        template: template,
        events: {
            "submit form": "save"
        },

        renderErrors: function(model, xhr) {
            if (xhr.status !== 400) { return; }
            var errors = xhr.responseJSON;

            this.$('.help-block').remove();
            this.$('.has-error').removeClass('has-error');
            _.each(errors, function(error) {
                var input = this.$('[name="' + error.field + '"]');
                input.parents('.form-group').addClass('has-error');
                $('<span>', { "class": "help-block", text: error.message })
                    .appendTo(input.parent());
            }, this);
        },

        save: function(event) {
            var form = $(event.target),
                attributes = {};

            _.each(form.serializeArray(), function(item) {
                attributes[item.name] = item.value;
            });

            this.model.save(attributes, {
                success: this.navigate,
                error: _.bind(this.renderErrors, this)
            });

            return false;
        },

        navigate: function() {
            popup.alert('Success', 'User was successfully saved');
            Backbone.history.navigate('list', { trigger: true });
        }
    })
});