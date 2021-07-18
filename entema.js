const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require('dotenv/config');

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

const db = mysql.createConnection({
  user: process.env.US,
  host: process.env.HOST,
  password: process.env.PWD,
  database: process.env.DATABASE,
});

// const db = mysql.createConnection({
  // user: "llumacin_userbkp",
  // host: "162.241.217.225",
  // password: "llumacin_userbkp",
  // database: "llumacin_loadbackup",
// });

db.connect((err) => {
  if (err) {
    console.log("These is error while connecting to db", err.stack);
  } else {
    console.log("Succeed and connection thread id is ", db.threadId);
  }
});


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


app.post("/insertUserData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 console.log("Test values NAme :", req.body.userActdate);
		 
		 
	    const userName  = req.body.userName;
        const userFname = req.body.userFname;
        const userEmail = req.body.userEmail;
        const userPwd = req.body.userPwd;
        const userCpwd = req.body.userCpwd;
        const userPhone = req.body.userPhone;
        const userDesignation = req.body.userDesignation;
        const userRole = req.body.userRole;
        const userStatus = req.body.userStatus;
        const userActdate = req.body.userActdate;
        const userDactdate = req.body.userDactdate;	

	
	
	 const sql = `INSERT INTO MS_ENT_USERS(USER_NAME,USER_FNAME,USER_EMAIL,USER_PWD,USER_PHONE,USER_DESIG,USER_ROLE,USER_STATUS,USER_ACT_DATE,USER_DACT_DATE) VALUES (?,?,?,?,?,?,?,?,?,?)`;
	
		db.query(sql,[userName,userFname,userEmail,userPwd,userPhone,userDesignation,userRole,userStatus,userActdate,userDactdate], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.post("/UpdateUserData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 console.log("Test values NAme :", req.userActdate);
		 
		const userId  = req.body.userId;		
	    const userName  = req.body.userName;
        const userFname = req.body.userFname;
        const userEmail = req.body.userEmail;
        const userPwd = req.body.userPwd;
        const userCpwd = req.body.userCpwd;
        const userPhone = req.body.userPhone;
        const userDesignation = req.body.userDesignation;
        const userRole = req.body.userRole;
        const userStatus = req.body.userStatus;
        const userActdate = req.body.userActdate;
        const userDactdate = req.body.userDactdate;	

	
	 const sql = `UPDATE MS_ENT_USERS SET USER_NAME=?,USER_FNAME=?,USER_EMAIL=?,USER_PWD=?,USER_PHONE=?,USER_DESIG=?,USER_ROLE=?,USER_STATUS=?,USER_ACT_DATE=?,USER_DACT_DATE=? WHERE USER_ID=?)`;
	
		db.query(sql,[userName,userFname,userEmail,userPwd,userPhone,userDesignation,userRole,userStatus,userActdate,userDactdate,userId], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.get("/getUserData", (req, res) =>{
  db.query("select * from MS_ENT_USERS", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/getUserDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const userID = req.body.userID;
	
  db.query("select * from MS_ENT_USERS where user_id=?", [userID], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});


app.post("/removeUserDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const userID = req.body.userID;
	
  db.query("delete from MS_ENT_USERS where user_id=?", [userID], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});

app.post("/insertVendorData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 console.log("Test values NAme :", req.body.vendorname);
		 
		 
		const vendorid = req.body.vendorid;
		const vendorname = req.body.vendorname;
		const vendorfline = req.body.vendorfline;
		const vendorcode = req.body.vendorcode;
		const vendoradd = req.body.vendoradd;
		const vendorcperson = req.body.vendorcperson;
		const vendorphone = req.body.vendorphone;
		const vendoremail = req.body.vendoremail;
		const vendorbfname = req.body.vendorbfname;
		const vendorbankname = req.body.vendorbankname;
		const vendorbankacc = req.body.vendorbankacc;
		const vendoriban = req.body.vendoriban;
		const vendorvat = req.body.vendorvat;
		const vendordocno = req.body.vendordocno;
		const createdby = req.body.createdby;
		const vendorstatus = req.body.vendorstatus;

	
	
	 const sql = `insert into MS_ENT_VENDORS(VENDOR_NAME,VENDOR_CODE,VENDOR_FL_PHONE,VENDOR_ADD,VENDOR_CPERSON,VENDOR_PHONE,VENDOR_EMAIL,VENDOR_BFNAME,VENDOR_BANK_NAME,VENDOR_BANK_ACC,VENDOR_IBAN,VENDOR_VAT,VENDOR_DOC_NO,CREATED_BY,CREATED_DATE,VENDOR_STATUS)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,current_date(),?)`;
	
		db.query(sql,[vendorname,vendorcode,vendorfline,vendoradd,vendorcperson,vendorphone,vendoremail,vendorbfname,vendorbankname,vendorbankacc,vendoriban,vendorvat,vendordocno,createdby,vendorstatus], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});


app.get("/getVendorData", (req, res) =>{
  db.query("select * from MS_ENT_VENDORS", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/getVendorIDData", (req, res) =>{
// console.log('requesting data : ', req);
  vendorID = req.body.vendorID;

  db.query("select * from MS_ENT_VENDORS where vendor_id = ?",[vendorID], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/removeVendorDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const vendorID = req.body.vendorID;
	
  db.query("delete from MS_ENT_VENDORS where vendor_id=?", [vendorID], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});


app.post("/insertClientData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
	 console.log("Test values NAme :", req.clientcpname);
		 
		 
	const clientcpname =req.body.clientcpname ;
	const clientcompname=req.body.clientcompname;
	const clientphone =req.body.clientphone ;
	const clientemail =req.body.clientemail ;
	const clientadd=req.body.clientadd;
	const createdby=req.body.createdby;


	
	 const sql = `INSERT INTO MS_ENT_CLIENTS(CLIENT_CPNAME,CLIENT_COMP_NAME,CLIENT_PHONE,CLIENT_EMAIL,CLIENT_ADD,CREATED_BY,CREATED_DATE) VALUES(?,?,?,?,?,?,current_date())`;
	
		db.query(sql,[clientcpname,clientcompname,clientphone,clientemail,clientadd,createdby], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.get("/getClientData", (req, res) =>{
  db.query("select * from MS_ENT_CLIENTS", (error, results) => {
    if (error) throw error;
    res.send(results);
	// console.log('results :', results);
  })
});


app.post("/removeClientDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const clientID = req.body.clientID;
	
  db.query("delete from MS_ENT_CLIENTS where client_id=?", [clientID], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});

app.post("/insertPOData", (req, res) =>{
	
  //console.log("Test values in services req values :", req);
  console.log("Test row length values :", req.body.taskList.length);
  //   console.log("Test values NAme :", req.podate);
    
   const  poid = req.body.poid; 
   const  podocno = req.body.podocno;
   const  podate = req.body.podate;
   const  porevno = req.body.porevno;
   const  ponumber = req.body.ponumber;
   const  poquotationref = req.body.poquotationref;
   const  poproject = req.body.poproject;
   const  popaymentmode = req.body.popaymentmode;
   const  povendor = req.body.povendor;
   const  pocode = req.body.pocode;
   const  pophone = req.body.pophone;
   const  pocpperson = req.body.pocpperson;
   const  pomobile = req.body.pomobile;
   const  poemail = req.body.poemail;
   const  povat = req.body.povat;
   const  poadd = req.body.poadd;
   const  postartdate = req.body.postartdate;
   const  poenddate = req.body.poenddate;
   const  polocation = req.body.polocation;
   const  pomobilizationdate = req.body.pomobilizationdate;
   const  podesc = req.body.podesc;
   const  pototal = req.body.pototal;
   const  pogst = req.body.pogst;
   const  pograndtotal = req.body.pograndtotal;
   const  instruction = req.body.instruction;
   const  deliveryTerms = req.body.deliveryTerms;
   const conditionTerms = req.body.conditionTerms;
   const createdBy = "Mazhar";
   const taskList = req.body.taskList;
   const testLenth = req.body.taskList.length;
   const vendorDispName = req.body.vendorDispName;



   const sql1 = `INSERT INTO MS_ENT_PURCHASE_ORDER_OIT(PO_ID,PO_ROW,PO_DESC,UNIT_DD,QUANTITY,UNIT_RATE,UNIT_AMOUNT)VALUES(?,?,?,?,?,?,?)`;

   for (var i=0; i< testLenth; i++){
   // console.log(testData.taskList[i].subjectName);
   db.query(sql1,[poid,i,taskList[i].description,taskList[i].unit,taskList[i].qty,taskList[i].unit_rate,taskList[i].amount], (error, results) => {
   if (error) throw error;
   // db.execute("commit");
   res.send(results.rows);
 })
}	

   const sql = `INSERT INTO MS_ENT_PURCHASE_ORDER(PO_ID,DOC_NO,REV_NO,WO_NUMBER,WO_QUO_REF,WO_PROJECT,WO_PAYMENT_MODE,VI_VENDOR,VI_CODE,VI_PH_NO,VI_CONTACT_PERSON,VI_MOBILE,VI_EMAIL,VI_VAT,VI_ADDRESS,WS_START_DATE,WS_END_DATE,WS_LOC,WS_MOB_DATE,WS_DESC,PO_TOTAL,PO_GST,PO_GRANDTOTAL,PO_INSTRUCTION,PO_TOD,PO_TC,CREATED_DATE,CREATED_BY,VENDOR_DISP_NAME)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,CURRENT_DATE(),?,?)`;
 
   db.query(sql,[poid,podocno,porevno,ponumber,poquotationref,poproject,popaymentmode,povendor,pocode,pophone,pocpperson,pomobile,poemail,povat,poadd,postartdate,poenddate,polocation,pomobilizationdate,podesc,pototal,pogst,pograndtotal,instruction,deliveryTerms,conditionTerms,createdBy,vendorDispName], (error, results) => {
   
   if (error) throw error;
 //db.execute("commit");
   res.send(results.rows);
 })

});

app.get("/getMultirowPOData", (req, res) =>{
  db.query("select * from MS_ENT_PURCHASE_ORDER_OIT", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.get("/getPOData", (req, res) =>{
  db.query("select * from MS_ENT_PURCHASE_ORDER", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/removePODataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const POID = req.body.POID;
	
  db.query("delete from MS_ENT_PURCHASE_ORDER where PO_ID=?",[POID], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/removePOMulDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const POID = req.body.POID;

  db.query("delete from MS_ENT_PURCHASE_ORDER_OIT where PO_ID=?",[POID], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.get("/getPOMULData", (req, res) =>{
  db.query("SELECT a.PO_ID as PO_ID ,DOC_NO,REV_NO,WO_NUMBER,WO_QUO_REF,WO_PROJECT,WO_PAYMENT_MODE,VI_VENDOR,VI_CODE,VI_PH_NO,VI_CONTACT_PERSON,VI_MOBILE,VI_EMAIL,VI_VAT,VI_ADDRESS,WS_START_DATE,WS_END_DATE,WS_LOC,WS_MOB_DATE,WS_DESC,PO_TOTAL,PO_GST,PO_GRANDTOTAL,PO_INSTRUCTION,PO_TOD,PO_TC,CREATED_DATE,CREATED_BY,VENDOR_DISP_NAME,PO_ROW,PO_DESC,UNIT_DD,QUANTITY,UNIT_RATE,UNIT_AMOUNT FROM MS_ENT_PURCHASE_ORDER a , MS_ENT_PURCHASE_ORDER_OIT b where a.PO_ID=b.PO_ID and a.PO_ID='2021527193716395';", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/getPOMULDataonID", (req, res) =>{
	
	console.log("Test values in services req values :", req);
	
	const POID = req.body.POID;
	
  db.query("SELECT a.PO_ID as PO_ID ,DOC_NO,REV_NO,WO_NUMBER,WO_QUO_REF,WO_PROJECT,WO_PAYMENT_MODE,VI_VENDOR,VI_CODE,VI_PH_NO,VI_CONTACT_PERSON,VI_MOBILE,VI_EMAIL,VI_VAT,VI_ADDRESS,WS_START_DATE,WS_END_DATE,WS_LOC,WS_MOB_DATE,WS_DESC,PO_TOTAL,PO_GST,PO_GRANDTOTAL,PO_INSTRUCTION,PO_TOD,PO_TC,CREATED_DATE,CREATED_BY,PO_ROW,PO_DESC,UNIT_DD,QUANTITY,UNIT_RATE,UNIT_AMOUNT FROM MS_ENT_PURCHASE_ORDER a , MS_ENT_PURCHASE_ORDER_OIT b where a.PO_ID=b.PO_ID and a.PO_ID=?;",[POID], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/insertQuotData", (req, res) =>{
	
  console.log("Test values in services req values :", req);
  console.log("Test row length values :", req.body.multiSet.length);
  //   console.log("Test values NAme :", req.podate);
    


	const qoid = req.body.quotID;
	const quotno = req.body.quotRefNo ;
	const wostartdate = req.body.cqdate ;
	const wofromcomp = req.body.entFrom;
	const wofrommob = req.body.entMobile;
	const qocompclient = req.body.cqclient ;
	const qocompname = req.body.cqname ;
	const qocompmob = req.body.cqmobileNo ;
	const qocompemail = req.body.cqemail ;
	const qotype = req.body.cqtypes ;
	const qotermscond = req.body.termCond ;
	const signname = "";
	const signtitle = "";
	const signdate = "";
	const signsignature = "";
	const createdby = "Mazhar" ;
	const qostatus = "Active" ;

   const taskList = req.body.multiSet;
   const testLenth = req.body.multiSet.length;
   const clientDispValue = req.body.clientDispValue;


   const sql1 = `INSERT INTO MS_ENT_QUOTATION_MUL(QO_ROW,QO_ID,TAB_DESC,TAB_UNIT,TAB_QTY,TAB_AMOUNT,TAB_MAD)VALUES(?,?,?,?,?,?,?)`;

   for (var i=0; i< testLenth; i++){
   // console.log(testData.taskList[i].subjectName);
   db.query(sql1,[i,qoid,taskList[i].description,taskList[i].unit,taskList[i].qty,taskList[i].amount,taskList[i].mobAnddemob], (error, results) => {
   if (error) throw error;
   // db.execute("commit");
   res.send(results.rows);
 })
}	

   const sql = `INSERT INTO MS_ENT_QUOTATION(QO_ID,CREATED_DATE,QUOT_NO,WO_STARTDATE,WO_FROM_COMP,WO_FROM_MOB,QO_COMP_CLIENT,QO_COMP_NAME,QO_COMP_MOB,QO_COMP_EMAIL,QO_TYPE,QO_TERMS_COND,SIGN_NAME,SIGN_TITLE,SIGN_DATE,SIGN_SIGNATURE,CREATED_BY,QO_STATUS,CLIENT_DISP_NAME)VALUES(?,CURRENT_DATE(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
 
   db.query(sql,[qoid,quotno,wostartdate,wofromcomp,wofrommob,qocompclient,qocompname,qocompmob,qocompemail,qotype,qotermscond,signname,signtitle,signdate,signsignature,createdby,qostatus,clientDispValue], (error, results) => {
   
   if (error) throw error;
 //db.execute("commit");
   res.send(results.rows);
 })

});


app.get("/getMultirowQuotData", (req, res) =>{
  db.query("select * from MS_ENT_QUOTATION_MUL", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.get("/getQuotData", (req, res) =>{
  db.query("select * from MS_ENT_QUOTATION", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/removeQODataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const QOID = req.body.QOID;
	
  db.query("delete from MS_ENT_QUOTATION where QO_ID=?",[QOID], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/removeQOMulDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const QOID = req.body.QOID;

  db.query("delete from MS_ENT_QUOTATION_MUL where QO_ID=?",[QOID], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/insertVenTimesheetData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);		 
		 
		const tsvendor= req.body.tsvendor;
		const tsmonth= req.body.tsmonth;
		const tsyear= req.body.tsyear;
		const tsdescription= req.body.tsdescription;
		const tsplot= req.body.tsplot;
		const tsopname= req.body.tsopname;
		const tsexphours= req.body.tsexphours;
		const tsmonthrate= req.body.tsmonthrate;
		const tsotrate= req.body.tsotrate;
		const tshrrate= req.body.tshrrate;
		const tstotalhour= req.body.tstotalhour;
		const tstotalot= req.body.tstotalot;
		const tstotal= req.body.tstotal;
		const tsgrid= req.body.tsgrid;
		const tsVendorDisp=req.body.vendorDispValue;
		// -- const createddate= req.body.createddate;
		// -- const createdby= req.body.createdby;
		const createdby= "Mazhar";
		const tsstatus= "Active";

	
	
	 const sql = `INSERT INTO MS_ENT_VEN_TIMESHEET(TS_VENDOR,TS_MONTH,TS_YEAR,TS_DESCRIPTION,TS_PLOT,TS_OP_NAME,TS_EXP_HOURS,TS_MONTH_RATE,TS_OT_RATE,TS_HR_RATE,TS_TOTAL_HOUR,TS_TOTAL_OT,TS_TOTAL,TS_GRID,CREATED_DATE,CREATED_BY,TS_STATUS,TS_VENDOR_DISP_NAME) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,current_date(),?,?,?)`;
	
		db.query(sql,[tsvendor,tsmonth,tsyear,tsdescription,tsplot,tsopname,tsexphours,tsmonthrate,tsotrate,tshrrate,tstotalhour,tstotalot,tstotal,tsgrid,createdby,tsstatus,tsVendorDisp], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.get("/getVenTimesheetData", (req, res) =>{
  db.query("select * from MS_ENT_VEN_TIMESHEET", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/getVenTimesheetDataonId", (req, res) =>{
	
	const venMonth = req.body.venMonth;
	const venYear = req.body.venYear;
	
  db.query("select * from MS_ENT_VEN_TIMESHEET where TS_MONTH=? AND TS_YEAR=? order by ts_vendor",[venMonth,venYear], (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});

app.post("/getVenTimesheetValidation", (req, res) =>{
	
	console.log("Test values in services req values :", req);		 
	
	const pVendor = req.body.pVendor;
	const pMonth = req.body.pMonth;
	const pYear = req.body.pYear;
	
	const sql = `select count(*) as validate from MS_ENT_VEN_TIMESHEET where TS_VENDOR=? and TS_MONTH=? and TS_YEAR=?`;
	
  db.query(sql,[pVendor,pMonth,pYear], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});

app.post("/removeVenTSDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const TSID = req.body.TSID;
	
  db.query("delete from MS_ENT_VEN_TIMESHEET where vts_id=?", [TSID], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});


app.post("/insertManpowerData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 
		const mpname= req.body.mpname;
		const mpiqamaid= req.body.mpiqamaid;
		const mpcategory= req.body.mpcategory;
		const mpbenfname= req.body.mpbenfname;
		const mpbankname= req.body.mpbankname;
		const mpaccount= req.body.mpaccount;
		const mpiban= req.body.mpiban;
		const mploc= req.body.mploc;
		const mpdesc= req.body.mpdesc;
		// const createddate= req.body.createddate;
		// const createdby= req.body.createdby;
		// const mpstatus= req.body.mpstatus;
		const createdby= "Mazhar";
		const mpstatus= "Active";

	
	
	 const sql = `INSERT INTO MS_ENT_MANPOWER(MP_NAME,MP_IQAMA_ID,MP_CATEGORY,MP_BENF_NAME,MP_BANK_NAME,MP_ACCOUNT,MP_IBAN,MP_LOC,MP_DESC,CREATED_DATE,CREATED_BY,MP_STATUS) VALUES (?,?,?,?,?,?,?,?,?,current_date(),?,?)`;
	
		db.query(sql,[mpname,mpiqamaid,mpcategory,mpbenfname,mpbankname,mpaccount,mpiban,mploc,mpdesc,createdby,mpstatus], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});


app.get("/getManpowerData", (req, res) =>{
	console.log("Test values in services req values :", req);
	
  db.query("select * from MS_ENT_MANPOWER", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/removeMPDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const MPID = req.body.MPID;
	
  db.query("delete from MS_ENT_MANPOWER where mp_id=?", [MPID], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});

app.post("/insertManPTimesheetData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 
		const mtsmanpower= req.body.mtsmanpower;
		const mtsmonth= req.body.mtsmonth;
		const mtsyear= req.body.mtsyear;
		const mtsdescription= req.body.mtsdescription;
		const mtsiqama= req.body.mtsiqama;
		const mtsworkhours= req.body.mtsworkhours;
		const mtsothours= req.body.mtsothours;
		const mtshrrate= req.body.mtshrrate;
		const mtsotrate= req.body.mtsotrate;
		const mtstotal= req.body.mtstotal;
		const mtsgrid= req.body.mtsgrid;
		// -- const createddate= req.body.createddate;
		// -- const createdby= req.body.createdby;
		// -- const mtsstatus= req.body.mtsstatus;

		const createdby= "Mazhar";
		const mtsstatus= "Active";

	
	
	 const sql = `INSERT INTO MS_ENT_MAN_TIMESHEET(MTS_MANPOWER,MTS_MONTH,MTS_YEAR,MTS_DESCRIPTION,MTS_IQAMA,MTS_WORKHOURS,MTS_OT_HOURS,MTS_HR_RATE,MTS_OT_RATE,MTS_TOTAL,MTS_GRID,CREATED_DATE,CREATED_BY,MTS_STATUS) VALUES (?,?,?,?,?,?,?,?,?,?,?,current_date(),?,?)`;
	
		db.query(sql,[mtsmanpower,mtsmonth,mtsyear,mtsdescription,mtsiqama,mtsworkhours,mtsothours,mtshrrate,mtsotrate,mtstotal,mtsgrid,createdby,mtsstatus], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});


app.get("/getManpowerTimesheetData", (req, res) =>{
  db.query("select * from MS_ENT_MAN_TIMESHEET", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/removeMPTSDataonId", (req, res) =>{
	console.log("Test values in services req values :", req);
	
	const MPID = req.body.TSID;
	
  db.query("delete from MS_ENT_MAN_TIMESHEET where MMTS_ID=?", [MPID], (error, results) => {
	  
    if (error) throw error;
    res.send(results);
  })
});

app.post("/insertDeliveryNoteData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 
		 
		const delclient= req.body.delclient;
		const deladd= req.body.deladd;
		const delshipadd= req.body.delshipadd;
		const delorderdate= req.body.delorderdate;
		const deldispdate= req.body.deldispdate;
		const delnotice= req.body.delnotice;
		// const createddate= req.body.createddate;
		// const createdby= req.body.createdby;
		// const delstatus= req.body.delstatus;

		const createdby= "Mazhar";
		const delstatus= "Active";

	
	
	 const sql = `INSERT INTO MS_ENT_DEL_NOTE(DEL_CLIENT,DEL_ADD,DEL_SHIP_ADD,DEL_ORDER_DATE,DEL_DISP_DATE,DEL_NOTICE,CREATED_DATE,CREATED_BY,DEL_STATUS) VALUES (?,?,?,?,?,?,current_date(),?,?)`;
	
		db.query(sql,[delclient,deladd,delshipadd,delorderdate,deldispdate,delnotice,createdby,delstatus], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.get("/getDeliveryNoteData", (req, res) =>{
  db.query("select * from MS_ENT_DEL_NOTE", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/insertVendorPaymentData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 console.log("Test values NAme :", req.userActdate);
		 
		 
		const pmvenname= req.body.pmvenname;
		const pmvents= req.body.pmvents;
		const pmamount= req.body.pmamount;
		const pmpmntmode= req.body.pmpmntmode;
		const pmdescription= req.body.pmdescription;
		const pmstatus= req.body.pmstatus;
		// const createddate= req.body.createddate;
		// const createdby= req.body.createdby;

		const createdby= "Mazhar";
		// const delstatus= "Active";
	
	 const sql = `INSERT INTO MS_ENT_PAYMENT(PM_VEN_NAME,PM_VEN_TS,PM_AMOUNT,PM_PMNT_MODE,PM_DESCRIPTION,PM_STATUS,CREATED_DATE,CREATED_BY) VALUES (?,?,?,?,?,?,current_date(),?)`;
	
		db.query(sql,[pmvenname,pmvents,pmamount,pmpmntmode,pmdescription,pmstatus,createdby], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.post("/insertActivitiesData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 console.log("Test values NAme :", req.userActdate);
		 
		 
		const actname= req.body.actname;
		const actenddate= req.body.actenddate;
		const actdescription= req.body.actdescription;
		// const actstatus= req.body.actstatus;
		// const createddate= req.body.createddate;
		// const createdby= req.body.createdby;


		const createdby= "Mazhar";
		const actstatus= "Active";

	
	
	 const sql = `INSERT INTO MS_ENT_ACTIVITIES(ACT_NAME,ACT_END_DATE,ACT_DESCRIPTION,ACT_STATUS,CREATED_DATE,CREATED_BY) VALUES (?,?,?,?,current_date(),?)`;
	
		db.query(sql,[actname,actenddate,actdescription,actstatus,createdby], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
 
});

app.get("/getActivitiesData", (req, res) =>{
  db.query("select * from MS_ENT_ACTIVITIES", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.post("/insertRolesData", (req, res) =>{
	
	 console.log("Test values in services req values :", req);
		 
		const rlid= req.body.rlId;
		const rlname= req.body.rlname;
		const rlenddate= req.body.rlenddate;
		const rldescription= req.body.rldescription;
		const rlactivities= req.body.rlactivities;
		// const rlstatus= req.body.rlstatus;
		// const createddate= req.body.createddate;
		// const createdby= req.body.createdby;

		const createdby= "Mazhar";
		const rlstatus= "Active";
		
		const testLenth = req.body.rlactivities.length;
		
		
	   const sql1 = `INSERT INTO MS_ENT_ROLES_ACT(ROW_ID,ROLE_ID,ACTIVITY_NAME)VALUES(?,?,?)`;

   for (var i=0; i< testLenth; i++){
   // console.log(testData.taskList[i].subjectName);
   db.query(sql1,[i,rlid,rlactivities[i]], (error, results) => {
   if (error) throw error;
   // db.execute("commit");
   res.send(results.rows);
 })
}	
	
	 const sql = `INSERT INTO MS_ENT_ROLES(RL_ID,RL_NAME,RL_END_DATE,RL_DESCRIPTION,RL_STATUS,CREATED_DATE,CREATED_BY) VALUES (?,?,?,?,?,current_date(),?)`;
	
		db.query(sql,[rlid,rlname,rlenddate,rldescription,rlstatus,createdby], (error, results) => {
    if (error) throw error;
	//db.execute("commit");
    res.send(results.rows);
  })
});



app.get("/getRolesData", (req, res) =>{
  db.query("select * from MS_ENT_ROLES", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
});


app.get("/getYearLov", (req, res) =>{
  db.query("select * from getYear", (error, results) => {
    if (error) throw error;
    res.send(results);
  })
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
});



app.listen(port, () => {
  console.log("Server is up and running on port :",port);
});

module.exports = db;
