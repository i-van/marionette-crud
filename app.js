
/**
 * Module dependencies.
 */

var express    = require('express'),
    path       = require('path'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    favicon    = require('serve-favicon'),
    mongoose   = require('mongoose');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/users');
require('./models/user');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if ('development' == app.get('env')) {
    app.use(logger('dev'));
}
app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/// routes
app.get('/', function(req, res) {
    res.render('index');
});
app.use('/api/users', require('./routes/user'));

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json('error', {
        message: err.message,
        error: app.get('env') === 'development' ? err : {}
    });
});

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
