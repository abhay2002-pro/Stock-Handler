const mongoose = require("mongoose");
// defining schema
const nseSchema = new mongoose.Schema({
  Date: { type: String },
  Open: { type: Number },
  High: { type: Number },
  Low: { type: Number },
  Close: { type: Number },
  Volume: { type: Number },
});
// creating model
const nseCreater = new mongoose.model("nses", nseSchema);
module.exports = nseCreater;
