const express = require("express");
const router = express.Router();
const MultiMedia = require("../models/MultiMedia.model");
const mongoose = require("mongoose");

router.post('/medias', (req, res, next) => {
  const {title,youTubeSrc} = req.body;


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




module.exports = router;