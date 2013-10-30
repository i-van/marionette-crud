
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    login: String,
    name: String
});

mongoose.model('User', schema);
