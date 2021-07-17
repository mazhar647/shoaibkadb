const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "llumacin_userbkp",
  host: "162.241.217.225",
  password: "llumacin_userbkp",
  database: "llumacin_loadbackup",
});

db.connect((err) => {
  if (err) {
    console.log("These is error while connecting to db", err.stack);
  } else {
    console.log("Succeed and connection thread id is ", db.threadId);
  }
});



app.get("/getMaxId", (req, res) =>{
  db.query("select * from MS_ENT_TEST", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});



app.listen(3002, () => {
  console.log("Server is up and running on port 3002");
});

module.exports = db;
