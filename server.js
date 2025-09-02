require("dotenv").config();
const connectedToDb = require("./db/db");
const app = require('./src/app');

connectedToDb()
const PORT = process.env.PORT || 3000; 
// 3000 is just fallback for local dev
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});