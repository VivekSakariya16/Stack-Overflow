const User = require('../Model/User');
const bcrypt = require('bcryptjs');

const addUser = async (email,password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({
            email: email,
            password: hash
        });
        await newUser.save();
        res.status(200).json({ message: "User added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = addUser;