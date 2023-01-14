const express = require("express");
const app = express(); //express app
require("dotenv").config();
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4001;
// url to connect mongodb
const link = `mongodb+srv://${process.env.PASSWORD}:mongodb2002@cluster0.8et7m.mongodb.net/${process.env.DATABASENAME}`;
mongoose
  .connect(`${link}`, { useNewUrlParser: true, useUnifiedTopology: true }) // to avoid warning
  .then(() => {
    console.log("success");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // listen for request
  })
  .catch((err) => console.log(err));

// adding routes
const auth = require("./routes/authRoutes");
const stocks = require("./routes/stocksRoutes");
const ErrorMiddleware = require("./middlewares/Error");

app.use("/api/v1", auth);
app.use("/api/v1", stocks);

app.use(ErrorMiddleware);
