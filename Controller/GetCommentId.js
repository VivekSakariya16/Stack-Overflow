const Question = require('../Model/Question');

const getCommentId = async (qid, comment_data) => {
    try {
        const question = await Question.findOne({ qid: qid });
        for (let i = 0; i < question.comments.length; i++) {
            if (question.comments[i].data === comment_data) {
                return question.comments[i].commentId;
            }
        }
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = getCommentId;