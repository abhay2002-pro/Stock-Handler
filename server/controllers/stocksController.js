const mongoose = require("mongoose");
const bseCreater = require("../models/bse");
const nseCreater = require("../models/nse");
const { catchAsyncError } = require("../middlewares/catchAsyncError");

const TIME = {
  "1W": 7,
  "1M": 30,
  "1Y": 365,
  ALL: "ALL",
};

const model = {
  nse: nseCreater,
  bse: bseCreater,
};

const Stocks = catchAsyncError(async (req, res) => {
  const query = req.query;
  const { stock, time } = query;
  console.log(stock, time);
  if (!time) time = "1W";
  if (stock === "bse" || stock === "nse") {
    if (TIME[time] === "ALL") {
      const data = await model[stock].find({}, null, { sort: { Date: -1 } });
      res.json(data);
    } else {
      const data = await model[stock]
        .find({}, null, { sort: { Date: -1 } })
        .limit(TIME[time]);
      res.json(data);
    }
  } else res.status(400).send("wrong name");
});

module.exports = { Stocks };
