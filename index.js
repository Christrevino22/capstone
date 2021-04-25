// NEED TO FIGURE OUT HOW TO LINK MY DATABASE UP TO MY SERVER BUT I ALSO NEED TO CREATE A SERVER TOO DUHHHH
const express = require("express");
const bodyParser = require("body-parser");
const furniture = require("./routers/furniture");
const cors = require("cors");
const mysql = require("mysql");
const pool = require("./sql/connection");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(furniture);

app.get("/", (req, res) => {
  res.send("Welcome to the furniture store!!!!");
});

// app.get("/furniture", (req, res) => {
//   pool.query("SELECT * FROM furniture", (err, rows) => {
//     if (err) throw new Error(err);
//     return res.json(rows);
//   });
// });

// app.get("/furniture/:id", (req, res) => {
//   const id = req.params.id;

//   pool.query(`SELECT * FROM furniture WHERE id = ${id}`, (err, rows) => {
//     if (err) throw new Error(err);
//     return res.json(rows);
//   });
// });

// app.post("/furniture", (req, res) => {
//   const furniture = req.body;
//   pool.query(
//     `INSERT INTO furniture (fur_name, fur_type, fur_color, fur_dept, fur_price, fur_img) VALUES ("${furniture.fur_name}", "${furniture.fur_type}", "${furniture.fur_color}", "${furniture.fur_dept}", "${furniture.fur_price}", "${furniture.fur_img}")`,
//     (err, rows) => {
//       if (err) throw new Error(err);
//       return req.body;
//     }
//   );
// });

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
