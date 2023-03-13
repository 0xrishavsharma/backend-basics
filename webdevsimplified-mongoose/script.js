// The first thing we need to do with Mongoose is to connect it to a database
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/testdb1")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))