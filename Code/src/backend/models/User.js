const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);