const mongoose = require("mongoose");
const { Schema } = mongoose;

const textSchema = new Schema({
  test: String,
});

// Compile model from schema
module.exports = mongoose.model("text", textSchema, "text");
