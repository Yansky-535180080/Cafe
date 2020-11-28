const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    name: String, 
    email: String, 
    password: String
});

module.exports = mongoose.model("Member", memberSchema);