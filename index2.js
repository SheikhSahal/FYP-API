const express = require('express');
const cors = require('cors');
const app = express();
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

//app.post("/api/insert", (req, res) => {
app.post("/", (req, res) => {
    const User = req.body.User;
    const IO_Date = req.body.IO_Date;
    const IO_time = req.body.IO_time;
    console.log(User) 
//const sqllnsert = "INSERT INTO users (User , IO_Date,IO_time) values (?,?,?)";
const sqllnsert = "INSERT INTO users (User , IO_Date,IO_time) values ('d','2022-02-02','03:00:00')";
//db.query(sqllnsert, [User , IO_Date, IO_time],(err, result ) => {
   
    db.query(sqllnsert, (err, result ) => {
        res.send("SQL server");
    //console.log(err);
})

});


// app.post("/api/signup", (req, res) => {

//     const User = req.body.User;
//     const Password = req.body.Password;
//     const inst = req.body.inst;

// const sqllnsert = "INSERT INTO reg (User , Password,inst) values (?,?,?)";
// db.query(sqllnsert, [User , Password, inst],(err, result ) => {
//     console.log(err);
// })

// });


app.listen(3001, () => {
    console.log("Runing on port 3001");
});

