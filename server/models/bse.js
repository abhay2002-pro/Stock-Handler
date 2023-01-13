const mongoose = require("mongoose");
// defining schema
const bseSchema = new mongoose.Schema({
  Date: { type: String },
  Open: { type: Number },
  High: { type: Number },
  Low: { type: Number },
  Close: { type: Number },
  Volume: { type: Number },
});
// creating model
const bseCreater = new mongoose.model("bses", bseSchema);
module.exports = bseCreater;
