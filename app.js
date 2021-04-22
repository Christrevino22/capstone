// NEED TO FIGURE OUT HOW TO LINK MY DATABASE UP TO MY SERVER BUT I ALSO NEED TO CREATE A SERVER TOO DUHHHH
const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "chris",
  password: "123456789",
  database: "acme",
});

db.connect();

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => console.log("Server started"));






// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=762cbc2e01bb606429ff&state=f989ba32-49e5-4172-9455-7ada942e783b



// const express = require('express');
// const mysql = require('mysql');

// //CREATING THE CONNECTION
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   // password: '',
//   // database: 'nodemysql',+
// })

// //CONNECTING
// db.connect((err)=> {
//   if(err) {
//     throw err;

//   }
//   console.log('MYSQL CONNECTED.....')
// })
// const app = express()

// // //CREATE DB
// // app.get('/createdb', (req, res) => {
// //   let sql = 'CREATE DATABASE nodemysql';
// //   db.query(sql, (err, result) => {
// //     if(err) throw err
// //       console.log(result);
// //       res.send('database created....');

// //   })

// // })

// app.listen('3000', () => {
//     console.log('Server started on PORT 3000')
// });
