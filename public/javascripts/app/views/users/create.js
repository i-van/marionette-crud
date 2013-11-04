define(['backbone', 'underscore', 'hbs!templates/users/create'], function(Backbone, _, template) {
    return Backbone.View.extend({
        template: template,
        events: {
            "submit form": "save"
        },

        initialize: function() {
            this.listenTo(this.model, 'error', this.renderErrors);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this
        },

        renderErrors: function(model, xhr) {
            if (xhr.status !== 400) { return }
            var errors = xhr.responseJSON;

            this.$('.help-block').remove();
            this.$('.has-error').removeClass('has-error');
            _.each(errors, function(error) {
                var input = $('[name="' + error.path + '"]');
                input.parents('.form-group').addClass('has-error');
                Backbone.$('<span>', { "class": "help-block", text: error.type })
                    .insertAfter(input)
            })
        },

        save: function(event) {
            var model = this.model
              , form = this.$(event.target);

            _.each(form.serializeArray(), function(item) {
                model.set(item.name, item.value)
            });

            model.save();

            return false
        }
    })
});