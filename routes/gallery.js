const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallery.model");
const mongoose = require("mongoose");

router.post('/photos', (req, res, next) => {
  const { title, imageUrl } = req.body;

  Gallery.create({ title, imageUrl })
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

router.get('/photos', (req, res, next) => {
  console.log('get photos')
  Gallery.find()
    .then((allPhotos) => {
      res.json(allPhotos)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });
});

router.get('/photos/:photoId', (req, res, next) => {
  const { photoId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(photoId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Gallery.findById(photoId)
    .then((galley) => res.status(200).json(galley))
    .catch((error) => res.json(error));
});

router.delete('/photos/:photoId', (req, res, next) => {
  const { photoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(photoId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Gallery.findByIdAndRemove(photoId)
    .then(() =>
      res.json({
        message: `Photo with ${photoId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});




module.exports = router;