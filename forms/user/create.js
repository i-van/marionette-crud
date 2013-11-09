
var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , async = require('async');

module.exports = function(req, res, next) {
    req.validate('firstName', 'First name is required').notEmpty();
    req.validate('lastName', 'Last name is required').notEmpty();
    req.validate('email', 'Email is required').notEmpty();
    req.validate('email', 'Email is not correct').isEmail();
    req.validate('login', 'Login is required').notEmpty();
    req.validate('password', 'Password is required').notEmpty();
    req.validate('password', 'Password length should be greater than 6').len(6);
    req.validate('password', 'Passwords should be matched').equals(req.body.passwordConfirmation);

    User.findOne({ login: req.body.login }, function(err, user) {
        if (err) { return next(err) }

        req.validate('login', 'Such User has been already registered').fail(user);
        var errors = req.validationErrors();
        if (errors) { return res.json(400, errors) }

        next()
    })
};
