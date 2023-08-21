const Question = require('../Model/Question');

const getAllQuestions = async () => {
    try {
        const questions = await Question.find();
        return questions;
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = getAllQuestions;