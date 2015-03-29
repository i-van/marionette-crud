// widgets/confirm - dependency for build
define(
['marionette', 'hbs!templates/users/list', 'helpers/invokeWidgets', 'widgets/confirm'],
function(Marionette, template, invokeWidgets) {
    return Marionette.ItemView.extend({
        template: template
        //render: function() {
        //    this.$el.html(this.template(this.collection.toJSON()));
        //    this.$('.table-pagination').html(pagination.render().el);
        //    invokeWidgets(this.$el);
        //    return this
        //}
    })
});