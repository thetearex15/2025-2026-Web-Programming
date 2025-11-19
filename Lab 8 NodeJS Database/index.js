const express = require('express'); 
const app = express(); 

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//new account
app.get('/form', function(req, res){
   res.sendFile(__dirname + "/form.html");
});
//password retrieval
app.get('/forgot', function(req, res){
   res.sendFile(__dirname + "/forgot.html");
});
app.listen(8080);
//insert new user account into database
app.post('/insert', function(req, res){
    const sql = "INSERT INTO Users (Username, Password, Email) VALUES (?, ?, ?)";
    conn.query(sql, [req.body.username, req.body.password, req.body.email],  
    function (err, result) {
        if (err) throw err;
        res.send("Insert successful");
        });
});
//retrieve password based on email
app.post('/retrieve', function(req, res){
  const sql = 'SELECT * FROM Users WHERE Email = ?';
  console.log("Form contents: " + req.body.email);
  conn.query(sql, [req.body.email], function (err, result) {
    if (err) throw err;
    if (result.length == 0)  { res.send("No email found."); }
    else {  console.log(result);
               res.send(result);
   }  }  );
}); 

//database setup
const mysql = require('mysql');
require('dotenv').config();               
const conn = mysql.createConnection({
  host: "mysql1-p2.ezhostingserver.com",
  database: "citdemo",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});
conn.connect((err) => {           // can move this into app.get and send
  if (err) throw err;
  console.log("Connected!");
});
