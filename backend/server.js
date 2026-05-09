const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root",
  database: "dogshelter",
});

db.connect((err) => {
  if (err) console.error("DB error:", err);
  else console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/db-test", (req, res) => {
  db.query("SELECT NOW() AS time", (err, result) => {
    if (err) res.status(500).send("DB error");
    else res.json(result);
  });
});

app.listen(5000, () => console.log("Server running on 5000"));
