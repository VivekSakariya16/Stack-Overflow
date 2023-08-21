const Question = require('../Model/Question');

const deleteQuestion = async (qid) => {
    try {
        Question.deleteOne({ qid: qid });
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = deleteQuestion;