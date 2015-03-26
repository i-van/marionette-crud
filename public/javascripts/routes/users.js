define(['marionette', 'controllers/users'], function(Marionette, usersController) {
    return Marionette.AppRouter.extend({
        controller: usersController,
        appRoutes: {
            "": "home",
            "list(/:page)": "list",
            "create": "create",
            "edit/:id": "edit",
            "remove/:id": "remove"
        },
        onRoute: function() {
            console.log('onRoute');
            console.log(arguments);
        }
    });
});