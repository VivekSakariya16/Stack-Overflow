const Question = require('../Model/Question');

const downvote = async (qid) => {
    try {
        const question = await Question.findOne({ qid: qid });
        question.downvote += 1;
        await question.save();
        res.status(200).json({ message: "Downvote successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}