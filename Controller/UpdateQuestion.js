const Question = require('../Model/Question');

const updateQuestion = async (qid, description) => {
    try {
        Question.updateOne({ qid: qid }, { description: description });
        res.status(200).json({ message: "Question updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = updateQuestion;