const mongoose = require("mongoose");
// defining schema
const tatasteelSchema = new mongoose.Schema({
  Date: { type: String },
  Open: { type: Number },
  High: { type: Number },
  Low: { type: Number },
  Close: { type: Number },
  Volume: { type: Number },
});
// creating model
const tatasteelCreater = new mongoose.model("tatasteels", tatasteelSchema);
module.exports = tatasteelCreater;
