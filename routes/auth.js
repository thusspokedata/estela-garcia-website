const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt");
// const nodemailer = require("nodemailer");
// const User = require("../models/User");

// router.post("/signup", (req, res, next) => {
//   const { email, password, name } = req.body;

//   if (email === "" || password === "" || name === "") {
//     res.status(400).json({ message: "Provide email, password and name" });
//     return;
//   }
//   const emailValid = email.includes("@");
//   if (!emailValid) {
//     res.status(400).json({ message: "Provide email, password and name" });
//     return;
//   }
//   if (password.length < 8) {
//     res.status(400).json({ message: "Password has to be 8 chars min" });
//     return;
//   }
//   User.findOne({ email }).then((foundUser) => {
//     if (foundUser) {
//       res.status(400).json({ message: "User already exists" });
//       return;
//     }
//     // hash the password
//     const salt = bcrypt.genSaltSync();
//     const hashedPassword = bcrypt.hashSync(password, salt);
//     // create the new user
//     return User.create({
//       username: name,
//       password: hashedPassword,
//       email,
//     })
//       .then((createdUser) => {
//         const { email, username, _id } = createdUser;
//         const user = { email, username, _id };
//         res.status(201).json({ user: user });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ message: "Internal Server Error" });
//       });
//   });
// });
