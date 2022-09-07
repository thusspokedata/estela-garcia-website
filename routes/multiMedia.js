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

// router.put('/medias/:mediaId', (req, res, next) => {
//   const {title,youTubeSrc} = req.body;
//   if (!mongoose.Types.ObjectId.isValid(mediaId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }
//   MultiMedia.findByIdAndUpdate(mediaId, req.body, { new: true })
//     .then((updatedObj) => res.json(updatedObj))
//     .catch((error) => res.json(error));
// });

// router.get('/photos/:photoId', (req, res, next) => {
//   const { photoId } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(photoId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }
//   Gallery.findById(photoId)
//     .then((galley) => res.status(200).json(galley))
//     .catch((error) => res.json(error));
// });

// router.put('/photos/:photoId', (req, res, next) => {
//   const { photoId } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(photoId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }
//   Gallery.findByIdAndUpdate(photoId, req.body, { new: true })
//     .then((updatedPhoto) => res.json(updatedPhoto))
//     .catch((error) => res.json(error));
// });

// router.delete('/photos/:photoId', (req, res, next) => {
//   const { photoId } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(photoId)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }
//   Gallery.findByIdAndRemove(photoId)
//     .then(() =>
//       res.json({
//         message: `Photo with ${photoId} is removed successfully.`,
//       })
//     )
//     .catch((error) => res.json(error));
// });




module.exports = router;