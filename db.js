const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.MONGO_URI; 
const connectToDatabase = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
    }).then(() => {
        console.log("Connection Successful");
    }).catch((e) => {
        console.log("Connection Failed\n", e);
    });
}

module.exports = connectToDatabase;