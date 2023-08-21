const Question = require('../Model/Question');

const updateQuestion = async (qid, description) => {
    try {
        Question.updateOne({ qid: qid }, { description: description });
        return "Question updated successfully";
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = updateQuestion;