const mongoose = require('mongoose');

const memberSchema = monggoose.Schema({
    name: String, 
    email: String, 
    password: String
});

module.exports = mongoose.model("Member", memberSchema);