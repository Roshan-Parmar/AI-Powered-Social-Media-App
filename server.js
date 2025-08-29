require("dotenv").config();
const connectedToDb = require("./db/db");
const app = require('./src/app');

connectedToDb()

app.listen("3000",()=>{
    console.log("server started running");
});