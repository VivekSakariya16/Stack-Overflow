const Question = require('../Model/Question');

const addQuestion = async (description) => {
    try {
        const newQuestion = new Question({
            qid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            description: description,
            upvote: 0,
            downvote: 0,
            comments: []
        });
        await newQuestion.save();
        res.status(200).json({ message: "Question added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = addQuestion;