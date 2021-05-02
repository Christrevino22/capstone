const express = require("express");
const mysql = require("mysql");
const pool = require("../../sql/connection");

const list = (req, res) => {
  pool.query("SELECT * FROM furniture", (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
};

const show = (req, res) => {
  const id = req.params.id;
  console.log(id);

  pool.query(`SELECT * FROM furniture WHERE id = ${id}`, (err, rows) => {
    if (err) throw new Error(err);
    return res.json(rows);
  });
};

const create = (req, res) => {
  const furniture = req.body;

  // Values have to be surrounded by strings!  Got ya.
  pool.query(
    `INSERT INTO furniture (fur_name, fur_type, fur_color, fur_dept, fur_price, fur_img) VALUES ("${furniture.fur_name}", "${furniture.fur_type}", "${furniture.fur_color}", "${furniture.fur_dept}", "${furniture.fur_price}", "${furniture.fur_img}")`,
    (err, rows) => {
      if (err) {
        console.error({ err });
        return res.status(500).send("An unexpected error occurred");
      }
      return res.json({ id: rows.insertId });
    }
  );
};

const update = (req, res) => {
  let sql = "UPDATE ?? SET ? WHERE ?? = ?";
  sql = mysql.format(sql, ["furniture", req.body, "id", req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.json({ id: results.message });
  });
};

const remove = (req, res) => {
  let sql = "DELETE FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["furniture", "id", req.params.id]);
  pool.query(sql, (err, results) => {
    if (err) {
      throw new Error(err);
    }

    return res.send({ affected: results.affectedRows });
  });
};

module.exports = { list, show, create, update, remove };
