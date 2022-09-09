const express = require("express");
const router = express.Router();
const MultiMedia = require("../models/MultiMedia.model");
const mongoose = require("mongoose");

router.post('/medias', (req, res, next) => {
  const {title,youTubeSrc} = req.body;

  if (title === '' || youTubeSrc === '' ) {
    res.status(400).json({ message: "Provide title and YouTube link" });
    return;
  }

  const youTubeSrcRegex = /www\.youtube\.com\/watch\?v\=...........$/
    if (!youTubeSrcRegex.test(youTubeSrc)) {
      res.status(400).json({ message: 'Provide a valid YouTube link.' });
      return;
    }


  MultiMedia.create({ title, youTubeSrc })
    .then((createdObj) => {
      const { title, youTubeSrc, _id } = createdObj;
      const multiMedia = { title, youTubeSrc, _id };
      res.status(201).json({ multiMedia: multiMedia });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Oh no! Server Error" })
    });
});

router.get('/medias', (req, res, next) => {
  MultiMedia.find()
    .then((allMedias) => {
      res.json(allMedias)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });
});

router.get('/admin/medias/:mediaId', (req, res, next) => {
  const { mediaId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(mediaId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  MultiMedia.findById(mediaId)
    .then((media) => res.status(200).json(media))
    .catch((error) => res.json(error));
});

router.put('/admin/medias/:mediaId', (req, res, next) => {
  const { mediaId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(mediaId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  MultiMedia.findByIdAndUpdate(mediaId, req.body, { new: true })
    .then((updatedMedia) => res.json(updatedMedia))
    .catch((error) => res.json(error));
});

router.delete('/admin/medias/:mediaId', (req, res, next) => {
  const { mediaId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(mediaId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  MultiMedia.findByIdAndRemove(mediaId)
    .then(() =>
      res.json({
        message: `Photo with ${mediaId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});




module.exports = router;