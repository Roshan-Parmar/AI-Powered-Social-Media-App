const mongoose = require("mongoose");
function connectedToDb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((error)=>{
        console.log(error);
    });
}

module.exports = connectedToDb;