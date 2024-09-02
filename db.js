const { Pool } = require("pg");

const pool = new Pool({
  user: "alexandruion",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database:", res.rows[0]);
  }
});

module.exports = pool;
