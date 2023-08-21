const Question = require('../Model/Question');

const upvoteComments = async (qid, commentId) => {
    try {
        const question = await Question.findOne({ qid: qid });
        for (let i = 0; i < question.comments.length; i++) {
            if (question.comments[i].commentId === commentId) {
                question.comments[i].upvote++;
            }
        }
        await question.save();
        return "Upvote Answer successfully";
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = upvoteComments;