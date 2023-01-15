const mongoose = require("mongoose");
// defining schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  token: { type: String },
});
// creating model
const userCreater = new mongoose.model("users", userSchema);
module.exports = userCreater;
