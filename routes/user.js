
var mongoose = require('mongoose')
  , User = mongoose.model('User');

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
    User.findById(req.params.id, function(err, user) {
        if (err) { return next(err) }
        user.set(req.params);
        user.save(function(err) {
            if (err) { return next(err) }
            res.json(user)
        })
    })
};

module.exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) { return next(err) }
        res.json(user)
    })
};

module.exports.remove = function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        user.remove(function(err) {
            if (err) { return next(err) }
            res.json(true)
        })
    })
};
