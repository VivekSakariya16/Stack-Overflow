const Question = require('../Model/Question');

const addComment = async (qid, comment) => {
    try {
        const question = await Question.findOne({ qid: qid });
        question.comments.push(comment);
        await question.save();
        return "Comment added successfully";
    } catch (error) {
        console.log(error);
        return  "Internal Server Error" ;
    }
}

module.exports = addComment;