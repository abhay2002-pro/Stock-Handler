const mongoose = require("mongoose");
// defining schema
const ashokleySchema = new mongoose.Schema({
  Date: { type: String },
  Open: { type: Number },
  High: { type: Number },
  Low: { type: Number },
  Close: { type: Number },
  Volume: { type: Number },
});
// creating model
const ashokleyCreater = new mongoose.model("ashokleys", ashokleySchema);
module.exports = ashokleyCreater;
