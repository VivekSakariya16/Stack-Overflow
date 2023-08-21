const Question = require('../Model/Question');

const downvote = async (qid) => {
    try {
        const question = await Question.findOne({ qid: qid });
        question.downvote += 1;
        await question.save();
        return "Downvote successfully";
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = downvote;