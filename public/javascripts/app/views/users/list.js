define(['backbone', 'hbs!templates/users/list', 'views/pagination'], function(Backbone, template, PaginationView) {
    return Backbone.View.extend({
        template: template,
        render: function() {
            var pagination = new PaginationView({
                itemsPerPage: this.collection.itemsPerPage,
                currentPage: this.collection.currentPage,
                totalItems: this.collection.totalItems,
                className: 'pagination pull-right',
                url: '#list/:page'
            });

            this.$el.html(this.template(this.collection.toJSON()));
            this.$('.table-pagination').html(pagination.render().el);
            return this
        }
    })
});