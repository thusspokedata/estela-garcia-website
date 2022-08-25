const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallery.model");

router.post('/upload-photos', (req, res, next) => {
  const { title, imageUrl } = req.body;
  Gallery.findOne({ imageUrl })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "The image is already exsit." });
        return;
      }
      return Gallery.create({ title, imageUrl });
    })
    .then((createdPhoto) => {
      const { title, imageUrl, _id } = createdPhoto;
      const gallery = { title, imageUrl, _id };
      res.status(201).json({ gallery: gallery });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Oh no! Server Error" })
    });
});

router.get('/upload-photos', (req, res, next) => {
  Gallery.find()
    .then((allPhotos) => {
      res.json(allPhotos)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });
});





module.exports = router;