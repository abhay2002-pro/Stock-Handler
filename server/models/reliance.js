const mongoose = require("mongoose");
// defining schema
const relianceSchema = new mongoose.Schema({
  Date: { type: String },
  Open: { type: Number },
  High: { type: Number },
  Low: { type: Number },
  Close: { type: Number },
  Volume: { type: Number },
});
// creating model
const relianceCreater = new mongoose.model("reliances", relianceSchema);
module.exports = relianceCreater;
