const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongo db is connected successfully")
    }
    catch (error) {
        console.error("connect error : ", error);
        process.exit(1);
    }
}

module.exports = connectToDb;