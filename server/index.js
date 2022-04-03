const dotenv = require("dotenv").config();
var url = process.env.DB_URL;
const ItemModel = require("./models/Items");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//connects to react 
const cors = require("cors");

app.use(express.json());
app.use(cors());

//connect to our mongoose cluster
mongoose.connect(url);

app.get("/getItems", (req, res) => {
    ItemModel.find({}, (err, result) => {
        if (err) {
            res.json(error);
        } else {
            res.json(result);
        }
    });
});

app.post("/createItem", async (req, res) => {
    var item = new ItemModel({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    });
    await item.save((err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
