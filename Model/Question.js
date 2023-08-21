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
        type: int,
    },
    downvote: {
        type: int
    },
    comments:[
            {
                type: String,
            }
    ]
});

module.exports = mongoose.model('question', Question);