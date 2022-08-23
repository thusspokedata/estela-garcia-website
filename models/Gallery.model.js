const { Schema, model } = require("mongoose");

const gallerySchema = new Schema(
    {
        title: String,
        
        imageUrl: String,
    },
    {
        timestamps: true,
    }
);

const Gallery = model("Gallery", gallerySchema);

module.exports = Gallery;