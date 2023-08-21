const Question = require('../Model/Question');

const deleteQuestion = async (qid) => {
    try {
        Question.deleteOne({ qid: qid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = deleteQuestion;