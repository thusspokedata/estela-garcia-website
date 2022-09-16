const router = require("express").Router();
// const jwt = require("jsonwebtoken");
// const { isAuthenticated } = require("../middlewares/jwt");
const Concert = require("../models/Concert");
const mongoose = require("mongoose");
const { uploader, cloudinary } = require("../config/cloudinary");

router.get("/concerts", (req, res, next) => {
  Concert.find().then((concert) => {
    res.status(200).json(concert);
  });
});

router.post("/concerts/add-new", (req, res, next) => {
  const {
    title,
    imageUrl,
    publicId,
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
    publicId,
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

// router.get("/concerts/delete/:id", (req, res, next) => {
//   const id = req.params.id;
//   console.log(`esto es concertId: ${id}`);
//   Concert.findByIdAndDelete({ _id: id }).then((deletedConcert) => {
//     if (deletedConcert.imageUrl) {
//       // delete the image on cloudinary
//       cloudinary.uploader.destroy(deletedConcert.imageUrl);
//     }
//   });
// });

router.post("/concerts/delete/:id", (req, res, next) => {
  console.log(req.params.id);
  Concert.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      if (data.imageUrl) {
        cloudinary.uploader.destroy(data.publicId);
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
