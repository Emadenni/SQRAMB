const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require("cors");
dotenv.config();
const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/", (req, res) => {
  res.send("Here i am");
});

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use ("/api", userRoutes)