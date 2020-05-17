const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Pet-Adoption", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));
