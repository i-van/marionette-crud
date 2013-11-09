
module.exports = function(req, res, next) {
    req.validate('firstName', 'First name is required').notEmpty();
    req.validate('lastName', 'Last name is required').notEmpty();
    req.validate('email', 'Email is required').notEmpty();
    req.validate('email', 'Email is not correct').isEmail();
    req.validate('login', 'Login is required').notEmpty();

    if (req.body.password) {
        req.validate('password', 'Password length should be greater than 6').len(6);
        req.validate('password', 'Passwords should be matched').equals(req.body.passwordConfirmation);
    }

    var errors = req.validationErrors();
    if (errors) { return res.json(400, errors) }

    next()
};
