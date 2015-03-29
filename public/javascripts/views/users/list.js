define(
['marionette', 'underscore', 'views/users/list/table', 'views/pagination'],
function(Marionette, _, TableView, PaginationView) {
    return Marionette.LayoutView.extend({
        template: _.template('<div class="table-container"></div><div class="table-pagination"></div>'),
        regions: {
            tableRegion: '.table-container',
            paginationRegion: '.table-pagination'
        },
        onShow: function() {
            this.tableRegion.show(new TableView({
                collection: this.collection
            }));
            this.paginationRegion.show(new PaginationView({
                itemsPerPage: this.collection.itemsPerPage,
                currentPage: this.collection.currentPage,
                totalItems: this.collection.totalItems,
                className: 'pagination pull-right',
                url: '#list/:page'
            }));
        }
    });
});