const User = require('../Model/User');
const bcrypt = require('bcryptjs');

const addUser = async (email,password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({
            uid : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            email: email,
            password: hash
        });
        await newUser.save();
        return "User added successfully";
    } catch (error) {
        console.log(error);
        return "Internal Server Error";
    }
}

module.exports = addUser;