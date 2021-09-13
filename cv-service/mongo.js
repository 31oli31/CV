const mongoose = require("mongoose");
const config = require("config");

console.log(config.url, "asdf", process.env.NODE_ENV);

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
