const mongoose = require("mongoose");
const config = require("config");

const connectionString = `${config.url.mongodb}cv`;

try {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((e) => {
      console.error("Connection error", e.message);
    });
} catch (error) {}

const db = mongoose.connection;

module.exports = db;
