const express = require("express");
const {
  Stocks,
  getCompanyData,
} = require("../controllers/stocksController.js");
const { verifyToken } = require("../middlewares/auth");
const router = express.Router();

router.get("/stocks", verifyToken, Stocks);
router.get("/company", verifyToken, getCompanyData);

module.exports = router;
