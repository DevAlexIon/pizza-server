const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Pizza Ordering API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
