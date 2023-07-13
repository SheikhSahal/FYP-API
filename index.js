const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createPool({
    host: "64.31.43.250",
    user: "sasengn1_CS_DB",
    password: "Asdbnm@123",
    database: "sasengn1_cs_db_01" 
    });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api", (req, res) => {
     const User = req.body.User;
     const IO_Date = req.body.IO_Date;
     const IO_time = req.body.IO_time;
     const long = req.body.long;
     const lati = req.body.lati;
    // console.log(User) 
const sqllnsert = "INSERT INTO users (User_id , IO_Date,IO_time, longtitute, latitude) values (?,?,?,?,?)";
//const sqllnsert = "INSERT INTO users (User_id , IO_Date,IO_time) values ('d','2022-02-02','03:00:00')";
db.query(sqllnsert, [User , IO_Date, IO_time,long,lati],(err, result ) => {
   
  //  db.query(sqllnsert, (err, result ) => {
        console.log(err)
        res.send("SQL server");
    //console.log(err);
})

});



app.post("/sign", (req, res) => {
    const User = req.body.User;
    const Password = req.body.Password;
    const inst = req.body.inst;

const sqllnsert = "INSERT INTO reg (User_id , Password,inst) values (?,?,?)";
db.query(sqllnsert, [User , Password, inst],(error, result ) => {
    console.log(error);
})

});

app.post("/leave", (req, res) => {

    const User = req.body.User;
    const apDate = req.body.apDate;
    const Remarks = req.body.Remarks;

const sqllnsert = "INSERT INTO LEAVES (User_id , Leave_date,Remarks) values (?,?,?)";
db.query(sqllnsert, [User , apDate, Remarks],(error, result ) => {
    console.log(error);
})

});

app.listen (3001, () => {
   console. log("running on port 3001");
});

