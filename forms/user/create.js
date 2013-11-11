
var Validation = require('../../lib/validation')
  , validators = Validation.validators;

module.exports = function(req, res, next) {
    Validation(req.body)
        .add('firstName', validators.notEmpty, 'First name is required')
        .add('lastName', validators.notEmpty, 'Last name is required')
        .add('email', validators.notEmpty, 'Email is required')
        .add('email', validators.isEmail, 'Email is not correct')
        .add('login', validators.notEmpty, 'Login is required')
        .add('login', validators.noRecordExists('User', { login: req.body.login }), 'Such User has been already registered')
        .add('password', validators.notEmpty, 'Password is required')
        .add('password', validators.len(6), 'Password length should be greater than 6')
        .add('password', validators.equalField('passwordConfirmation'), 'Passwords should be matched')
        .validate(function(err, errors) {
            if (err) {
                return next(err)
            }
            if (errors.length) {
                return res.json(400, errors)
            }

            next()
        })
};
