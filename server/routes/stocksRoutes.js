const express = require("express");
const {
  Stocks,
  getCompanyData,
} = require("../controllers/stocksController.js");
const router = express.Router();

router.get("/stocks", Stocks);
router.get("/company", getCompanyData);

module.exports = router;
