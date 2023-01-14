const mongoose = require("mongoose");
const bseCreater = require("../models/bse");
const nseCreater = require("../models/nse");
const ashokleyCreater = require("../models/ashokley");
const ciplaCreater = require("../models/cipla");
const relianceCreater = require("../models/reliance");
const tatasteelCreater = require("../models/tatasteel");
const { catchAsyncError } = require("../middlewares/catchAsyncError");

const TIME = {
  "1W": 7,
  "1M": 30,
  "1Y": 365,
  ALL: "ALL",
};

const SIModel = {
  nse: nseCreater,
  bse: bseCreater,
};

const Stocks = catchAsyncError(async (req, res) => {
  const query = req.query;
  let { stock, time } = query;
  if (!time) time = "1W";
  if (stock === "bse" || stock === "nse") {
    if (TIME[time] === "ALL") {
      const data = await SIModel[stock].find({}, null, { sort: { Date: -1 } });
      res.json(data);
    } else {
      const data = await SIModel[stock]
        .find({}, null, { sort: { Date: -1 } })
        .limit(TIME[time]);
      res.json(data);
    }
  } else res.status(400).send("wrong name");
});

const CompanyModel = {
  ashokley: ashokleyCreater,
  cipla: ciplaCreater,
  reliance: relianceCreater,
  tatasteel: tatasteelCreater,
};

const getCompanyData = catchAsyncError(async (req, res) => {
    const query = req.query;
    let { company, time } = query;
    if (!time) time = "1W";
    if (CompanyModel.hasOwnProperty(company)) {
      if (TIME[time] === "ALL") {
        const data = await CompanyModel[company].find({}, null, { sort: { Date: -1 } });
        res.json(data);
      } else {
        const data = await CompanyModel[company]
          .find({}, null, { sort: { Date: -1 } })
          .limit(TIME[time]);
        res.json(data);
      }
    } else res.status(400).send("company name not found");
  });

module.exports = { Stocks, getCompanyData };
