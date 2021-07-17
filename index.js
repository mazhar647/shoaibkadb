const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Welcome1",
  database: "react_schema",
});

db.connect((err) => {
  if (err) {
    console.log("These is error while connecting to db", err.stack);
  } else {
    console.log("Succeed and connection thread id is ", db.threadId);
  }
});

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const id = req.body.id;

//   console.log('Test values in services req values :',req);

//   console.log('Test values in services res values :',res);

//   db.query(
//     "insert into react_schema.test(testid,testcol) values(?,?)",
//     [id, name],
//     (err, result) => {

//         console.log('Test values in services :',name);
//       if (err) {
//         console.log("There is error ", err + result);
//       } else {
//         res.send("values inserted");
//       }
//     }
//   );
// });

app.post("/create", (req, res) => {
  const name = req.body.name;
  const gender = req.body.gender;
  const creationdate = req.body.creationdate;
  const closingdate = req.body.closingdate;
  const collorneck = req.body.collorneck;
  const chest = req.body.chest;
  const stomach = req.body.stomach;
  const belly = req.body.belly;
  const sidecut = req.body.sidecut;
  const topheight = req.body.topheight;
  const waist = req.body.waist;
  const hip = req.body.hip;
  const thighs = req.body.thighs;
  const lowerthigh = req.body.lowerthigh;
  const ankle = req.body.ankle;
  const description = req.body.description;
  const testdata = req.body.testdata;
  const status = req.body.status;

  // console.log("Test values in services req values :", req);

  // console.log("Test values in services res values :", res);

  db.query(
    "insert into react_schema.stichpad(stich_name ,stich_gender ,stich_creatdate ,stich_closdate ,stich_neck ,stich_chest ,stich_stomach ,stich_belly ,stich_sidecut ,stich_tophght ,stich_waist ,stich_hip ,stich_thigh ,stich_lthigh ,stich_ankle ,stich_desc,dummy1,stich_status ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      name,
      gender,
      creationdate,
      closingdate,
      collorneck,
      chest,
      stomach,
      belly,
      sidecut,
      topheight,
      waist,
      hip,
      thighs,
      lowerthigh,
      ankle,
      description,
      testdata,
      status,
    ],
    (err, result) => {
      // console.log("Test values in services :", name);
      if (err) {
        console.log("There is error ", err + result);
      } else {
        res.send("values inserted");
      }
    }
  );
});


app.post("/update", (req, res) => {
  const stichid = req.body.stichid;
  const name = req.body.name;
  const gender = req.body.gender;
  const creationdate = req.body.creationdate;
  const closingdate = req.body.closingdate;
  const collorneck = req.body.collorneck;
  const chest = req.body.chest;
  const stomach = req.body.stomach;
  const belly = req.body.belly;
  const sidecut = req.body.sidecut;
  const topheight = req.body.topheight;
  const waist = req.body.waist;
  const hip = req.body.hip;
  const thighs = req.body.thighs;
  const lowerthigh = req.body.lowerthigh;
  const ankle = req.body.ankle;
  const description = req.body.description;
  const status = req.body.status;

  // console.log("Test values in services req values :", req);

  // console.log("Test values in services res values :", res);

  db.query(
    "update react_schema.stichpad set stich_name=?,stich_gender=?,stich_creatdate=?,stich_closdate=?,stich_neck=?,stich_chest=?,stich_stomach=?,stich_belly=?,stich_sidecut=?,stich_tophght=?,stich_waist=?,stich_hip=?,stich_thigh=?,stich_lthigh=?,stich_ankle=?,stich_desc=?,stich_status=? where stich_id = '?' ",
    [
      name,
      gender,
      creationdate,
      closingdate,
      collorneck,
      chest,
      stomach,
      belly,
      sidecut,
      topheight,
      waist,
      hip,
      thighs,
      lowerthigh,
      ankle,
      description,
      status,
	  stichid,
    ],
    (err, result) => {
      console.log("Test values in update services :", name);
      if (err) {
        console.log("There is error ", err + result);
      } else {
        res.send("values Updated");
      }
    }
  );
}); 

app.get("/stichfulldata", (req, res) => {
  // Connecting to the database.
  // Executing the MySQL query (select all data from the 'users' table)
  // db.query("select * from react_schema.stichpad", (error, results) => {
    db.query("select stich_id,stich_name ,stich_gender ,date_format(stich_creatdate,'%m/%d/%Y') as stich_creatdate ,date_format(stich_closdate,'%m/%d/%Y') as stich_closdate ,stich_neck ,stich_chest ,stich_stomach ,stich_belly ,stich_sidecut ,stich_tophght ,stich_waist ,stich_hip ,stich_thigh ,stich_lthigh ,stich_ankle ,stich_desc,dummy1,stich_status from react_schema.stichpad", (error, results) => {
    // If some error occurs, we throw an error.
    if (error) throw error;
    // Getting the 'response' from the database and sending it to our route. This is were the data is.
    res.send(results);
  });
});


app.get("/getMaxId", (req, res) =>{
  db.query("select max(stich_id) as ID from react_schema.stichpad", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
})


app.post("/getDataOnId", (req, res) => {
  
  const stichId = req.body.stichId;
  
  // console.log('Id Value in service req : ', req);
  // console.log('Id Value in service res : ', res);
  // console.log('Id Value in service id : ', stichId);

  db.query("select stich_id as id,stich_name as name,stich_gender as gender,date_format(stich_creatdate,'%m/%d/%Y') as creationDate ,date_format(stich_closdate,'%m/%d/%Y') as closingDate ,stich_neck as collorNeck ,stich_chest as chest,stich_stomach as stomach,stich_belly as belly,stich_sidecut as sideCut,stich_tophght as topHeight,stich_waist as waist,stich_hip as hip,stich_thigh as thighs,stich_lthigh as lowerThigh,stich_ankle as ankle,stich_desc as description,stich_status as status from react_schema.stichpad where stich_id = '?'", 
  stichId,
  (error, result) => {
    // console.log("Test values in services :", stichId);
    // console.log("Test values in result :", result);
    if (error) {
      console.log("There is error ", error);
    } else {
      res.send(result);
    }
  })
});

app.post("/deleteStichRecord", (req, res) => {
  
  const stichId = req.body.stichId;
  
  // console.log('Id Value in service req : ', req);
  // console.log('Id Value in service res : ', res);
  // console.log('Id Value in service id : ', stichId);

  db.query("delete from react_schema.stichpad where stich_id = '?'", 
  stichId,
  (error, result) => {
    // console.log("Test values in services :", stichId);
    // console.log("Test values in result :", result);
    if (error) {
      console.log("There is error ", error);
    } else {
      res.send("Successfully deleted");
    }
  })
});


app.listen(3001, () => {
  console.log("Server is up and running on port 3001");
});

module.exports = db;
