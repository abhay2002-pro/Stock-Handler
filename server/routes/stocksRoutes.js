const express = require("express");
const { Stocks } = require("../controllers/stocksController.js");
const router = express.Router();

router.get("/stocks", Stocks);

module.exports = router;
