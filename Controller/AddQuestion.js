const Question = require('../Model/Question');
const User = require('../Model/User');

const addQuestion = async (description, userId) => {
    try {
        const newQuestion = new Question({
            qid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            description: description,
            upvote: 0,
            downvote: 0,
            comments: [],
            userId: userId
        });
        await newQuestion.save();
        const updateUser = User.updateOne({ userId: userId }, { $push: { questions: newQuestion.qid } });
        return  "Question added successfully";
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = addQuestion;