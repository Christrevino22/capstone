// NEED TO FIGURE OUT HOW TO LINK MY DATABASE UP TO MY SERVER BUT I ALSO NEED TO CREATE A SERVER TOO DUHHHH
const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 5000;

 



app.get("/", (req, res) => {

  res.send('Hello Future Dev!!!!')
  // });
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
