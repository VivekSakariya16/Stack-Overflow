const Question = require('../Model/Question');

const upvote = async (qid) => {
    try {
        const question = await Question.findOne({ qid: qid });
        question.upvote += 1;
        await question.save();
        return "Upvote successfully";
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = upvote;