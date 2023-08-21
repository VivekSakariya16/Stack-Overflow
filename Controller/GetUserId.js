const User = require('../Model/User');

const getUserId = async (email) => {
    const user = User.findOne({ email: email });
    return user.uid;
}