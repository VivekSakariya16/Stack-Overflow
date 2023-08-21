const Question = require('../Model/Question');

const getQid = async (description) => {
    try {
        const question = await Question.findOne({ description: description });
        return question.qid;
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = getQid;