const express = require("express");
const port = process.env.PORT || 3786;
const mongoose = require("./config/Database");

//the .router is used when exporting the router as an object from that particular routes file
const users = require("./config/apis/users").router;
const pets = require("./config/apis/pets").router;
const category = require("./config/apis/category").router;

const app = express();

// app.use(express.json());

app.use("/users", users);
app.use("/pets", pets);
app.use("/category", category);

app.listen(port, () => console.log(`Server started on ${port}`));
