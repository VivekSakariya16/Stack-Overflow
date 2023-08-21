const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    qid: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvote: {
        type: Number,
    },
    downvote: {
        type: Number
    },
    comments:[
        {
            commentId: {
                type: String,
                required: true
            },
            data: {
                type: String,
            },
            upvote: {
                type: Number,
            },
            downvote: {
                type: Number
            },
        }

    ],
    userId: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('question', Question);