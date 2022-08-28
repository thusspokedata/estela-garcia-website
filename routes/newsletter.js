// const router = require("express").Router();
// const Newsletter = require("../models/Newsletter");

// router.post("/suscribe-newsletter/:email", (req, res, next) => {
//   let email = req.params.email;
//   email = email.toLowerCase();
//   if (email === "") {
//     res.status(400).json({ message: "Provide email" });
//     return;
//   }
//   const emailValid = email.includes("@");
//   if (!emailValid) {
//     res.status(400).json({ message: "Provide email" });
//     return;
//   }
//   Newsletter.findOne({ email }).then((foundEmail) => {
//     if (foundEmail) {
//       res.status(400).json({ message: "Email already exists" });
//       return;
//     }

//     return Newsletter.create({
//       email,
//     })
//       .then((createdEmail) => {
//         const { email, _id } = createdEmail;
//         const user = { email, _id };
//         res.status(201).json({ user: user });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ message: "Internal Server Error" });
//       });
//   });
// });

// module.exports = router;
