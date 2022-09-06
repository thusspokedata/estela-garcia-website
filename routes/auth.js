const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt");
const nodemailer = require("nodemailer");
const User = require("../models/User");

router.post("/estela-garcia-site/signup", (req, res, next) => {
  const { email, password, username } = req.body;
  if (email === "" || password === "" || username === "") {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
  }
  const emailValid = email.includes("@");
  if (!emailValid) {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
  }
  if (password.length < 8) {
    res.status(400).json({ message: "Password has to be 8 chars min" });
    return;
  }
  User.findOne({ email }).then((foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    // hash the password
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);
    // create the new user
    return User.create({
      username,
      password: hashedPassword,
      email,
    })
      .then((createdUser) => {
        const { email, username, _id } = createdUser;
        const user = { email, username, _id };
        res.status(201).json({ user: user });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    res.status(400).json({ message: "Provide email and password" });
    return;
  }
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(400).json({ message: "User not found" });
        return;
      }
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
      if (passwordCorrect) {
        const { _id, username } = foundUser;
        const payload = { _id, username };
        // create the json web token
        const authToken = jwt.sign(payload, process.env.JWT_SECRET, {
          algorithm: "HS256",
          expiresIn: "12h",
        });
        res.status(200).json({ authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.get("/verify", isAuthenticated, (req, res, next) => {
  // if the token is valid we can access it on : req.payload
  console.log("request payload is: ", req.payload);
  res.status(200).json(req.payload);
});

module.exports = router;
