//add mongoose
const mongoose = require("mongoose");

//Ceate Schema
const schema = new mongoose.Schema(
  {
    title: "String",
    content: "String",
  },
  { timestamps: true }
);


const Post = mongoose.model("Post", schema);

module.exports = Post;