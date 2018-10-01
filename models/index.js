const mongoose = require("mongoose");

mongoose.set("debug", true);

require("dotenv").config();
const post = require("./post");
const comment = require("./comment");
const user = require("./user");

mongoose.set("debug", true);

mongoose.connect(
 process.env.MONGODB,
 { useNewUrlParser: true }
);

module.exports = {
 post,
 comment,
 user
};