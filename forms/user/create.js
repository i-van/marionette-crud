
var Validation = require('validation')
  , validators = require('validation/validators')
  , util = require('util');

function UserCreateValidation() {
    return UserCreateValidation.super_.apply(this, arguments)
}

util.inherits(UserCreateValidation, Validation);

UserCreateValidation.prototype.init = function() {
    this._firstName();
    this._lastName();
    this._email();
    this._login();
    this._password();
};

UserCreateValidation.prototype._firstName = function() {
    this.add('firstName', validators.notEmpty, 'First name is required')
};

UserCreateValidation.prototype._lastName = function() {
    this.add('lastName', validators.notEmpty, 'Last name is required')
};

UserCreateValidation.prototype._email = function() {
    this.add('email', validators.notEmpty, 'Email is required')
        .add('email', validators.isEmail, 'Email is not correct')
};

UserCreateValidation.prototype._login = function() {
    this.add('login', validators.notEmpty, 'Login is required');
    this.add(
        'login',
        validators.noRecordExists('User', { login: this.values.login }),
        'Such User has been already registered'
    )
};

UserCreateValidation.prototype._password = function() {
    this.add('password', validators.notEmpty, 'Password is required')
        .add('password', validators.length(6), 'Password length should be greater than 6')
        .add('password', validators.equalField('passwordConfirmation'), 'Passwords should be matched')
};

module.exports = UserCreateValidation;
