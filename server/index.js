const dotenv = require("dotenv").config();
var url = process.env.DB_URL;

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connect to our mongoose cluster
mongoose.connect(url);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
