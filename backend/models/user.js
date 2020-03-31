const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true
    },
    lastname: {
        type: String,
        maxlength:30,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userinfo: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("User", userSchema);