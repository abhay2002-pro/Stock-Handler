const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { catchAsyncError } = require("../middlewares/catchAsyncError");

const registerUser = catchAsyncError(async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!(email && password && first_name && last_name)) {
    res.status(400).send("All input is required");
  }
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }
  encryptedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    first_name,
    last_name,
    email: email.toLowerCase(),
    password: encryptedPassword,
  });

  const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
    expiresIn: "2h",
  });
  user.token = token;

  res.status(201).json(user);
});

const loginUser = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    res.status(200).json(user);
  } else {
    res.status(400).send("Invalid Credentials");
  }
});

const logoutUser = catchAsyncError(async (req, res) => {
  const authHeader = req.headers["x-access-token"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "You have been Logged Out" });
    } else {
      res.send({ msg: "Error" });
    }
  });
});

module.exports = { registerUser, loginUser, logoutUser };
