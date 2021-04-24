// NEED TO FIGURE OUT HOW TO LINK MY DATABASE UP TO MY SERVER BUT I ALSO NEED TO CREATE A SERVER TOO DUHHHH
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const pool = require("./sql/connection");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Future Dev!!!!");
});

app.get("/furniture", (req, res) => {
  pool.query("SELECT * FROM furniture", (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
});

app.get("/furniture/:id", (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM furniture WHERE id = ${id}`, (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
});

app.listen(PORT, () => console.log("Server started... Listening on PORT 5000"));
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
