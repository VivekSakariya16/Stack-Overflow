const Question = require('../Model/Question');

const upvote = async (qid) => {
    try {
        const question = await Question.findOne({ qid: qid });
        question.upvote += 1;
        await question.save();
        res.status(200).json({ message: "Upvote successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}