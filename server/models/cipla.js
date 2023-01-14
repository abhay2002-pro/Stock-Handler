const mongoose = require("mongoose");
// defining schema
const ciplaSchema = new mongoose.Schema({
  Date: { type: Date },
  Open: { type: Number },
  High: { type: Number },
  Low: { type: Number },
  Close: { type: Number },
  Volume: { type: Number },
});
// creating model
const ciplaCreater = new mongoose.model("ciplas", ciplaSchema);
module.exports = ciplaCreater;
