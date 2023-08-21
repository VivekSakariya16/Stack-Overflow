const express = require('express');
const cors = require('cors');

const connectToDatabase = require("./db");
const addUser = require("./Controller/AddUser");
const verifyUser = require("./Controller/Login");
const getUserId = require("./Controller/GetUserid");
const addQuestion = require("./Controller/AddQuestion");
const getQid = require("./Controller/GetQueid");
const updateQuestion = require("./Controller/UpdateQuestion");
const upvote = require("./Controller/Upvote");
const downvote = require("./Controller/Downvote");
const addComment = require("./Controller/AddComment");
const upvoteComments = require("./Controller/UpvoteComments");
const downvoteComments = require("./Controller/DownvoteComments");
const getAllQuestions = require("./Controller/AllQuestions");
const deleteQuestion = require("./Controller/DeleteQuestion");

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectToDatabase();

app.get('/', (req, res) => {
    res.send('Hello from API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// ADD USER
app.post("/add-user", addUser);

// LOGIN
app.post("/login", verifyUser);

// GET USERID
app.get("/get-userid", getUserId);

// ADD QUESTION
app.post("/add-question", addQuestion);

// UPDATE QUESTION
app.put("/update-question", updateQuestion);

//DELETE QUESTION
app.delete("/delete-question", deleteQuestion);

// UPVOTE AND DOWNVOTE QUESTION
app.put("/upvote", upvote);
app.put("/downvote", downvote);

// ADD COMMENT
app.put("/add-comment", addComment);

// UPVOTE AND DOWNVOTE COMMENTS 
app.put("/upvote-comments", upvoteComments);
app.put("/downvote-comments", downvoteComments);

// GET ALL QUESTIONS
app.get("/all-questions", getAllQuestions);