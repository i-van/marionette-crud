
var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , async = require('async');

module.exports.list = function(req, res, next) {
    User.find(function(err, users) {
        if (err) { return next(err) }
        res.json(users)
    })
};

module.exports.show = function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if (err) { return next(err) }
        res.json(user)
    })
};

module.exports.update = function(req, res, next) {
    async.waterfall([
        function(done) {
            User.findById(req.params.id, done)
        },
        function(user, done) {
            user.set(req.body).save(done)
        }
    ], function(err, user) {
        if (err) {
            return err.name === 'ValidationError'
                 ? res.json(400, err.errors)
                 : next(err)
        }
        res.json(user)
    })
};

module.exports.create = function(req, res, next) {
    User.create(req.body, function(err, user) {
        if (err) {
            return err.name === 'ValidationError'
                 ? res.json(400, err.errors)
                 : next(err)
        }
        res.json(user)
    })
};

module.exports.remove = function(req, res, next) {
    async.waterfall([
        function(done) {
            User.findById(req.params.id, done)
        },
        function(user, done) {
            user.remove(done)
        }
    ], function(err) {
        if (err) { return next(err) }
        res.json(true)
    })
};
