const mongoose = require('mongoose');

const connectdb=async ()=> {
    try {
        await mongoose.connect("mongodb://localhost:27017/Sample", { useNewUrlParser: true, useUnifiedTopology: true })
            console.log("Connected with Mongodb")
    }
    catch(err) {
            console.log(err)
        }
}

module.exports = connectdb;

