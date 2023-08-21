const User = require('../Model/User');

async function getUserId (email) {
    const user = await User.findOne({ email: email });
    return user.uid;
}

module.exports = getUserId;