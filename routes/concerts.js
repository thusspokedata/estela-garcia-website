const router = require("express").Router();
// const jwt = require("jsonwebtoken");
// const { isAuthenticated } = require("../middlewares/jwt");
const Concert = require("../models/Concert");

router.get("/concerts", (req, res, next) => {
  Concert.find().then((concert) => {
    res.status(200).json(concert);
  });
});

router.post("/concerts/add-new", (req, res, next) => {
  const {
    title,
    imageUrl,
    aboutEvent,
    address,
    addressNumber,
    city,
    zipCode,
    date,
  } = req.body;
  console.log(date);
  Concert.create({
    title,
    imageUrl,
    aboutEvent,
    address,
    addressNumber,
    city,
    zipCode,
    date,
  })
    .then((event) => {
      const { title, _id } = event;
      const evento = { title, _id };
      res.status(201).json({ evento: evento });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

module.exports = router;
