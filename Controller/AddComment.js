const Question = require('../Model/Question');

const addComment = async (qid, comment) => {
    try {
        const question = await Question.findOne({ qid: qid });
        question.comments.push(comment);
        await question.save();
        res.status(200).json({ message: "Comment added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}