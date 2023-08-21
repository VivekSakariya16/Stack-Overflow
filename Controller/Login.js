const User = require('../Model/User');
const bcrypt = require('bcryptjs');

const verifyUser = async (email,password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = User.findOne({email: email, password: hash});
        if(user){
            console.log("User Logged In Successfully");
            return true;
        }
        else{
            console.log("User Not Found");
            return false;
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = verifyUser;