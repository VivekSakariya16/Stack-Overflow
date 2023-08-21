const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    uid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    questions: [
        {
            type: String,
        }
    ],
});

module.exports = mongoose.model('user', User);