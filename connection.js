const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {

};
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@se373cluster00.nlfeo.mongodb.net/?retryWrites=true&w=majority`;

const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;