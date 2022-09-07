const { Schema, model } = require("mongoose");

const multiMediaSchema = new Schema(
    {
        title: String,
        
        youTubeSrc: String,
    },
    {
        timestamps: true,
    }
);

const MultiMedia = model("MultiMedia", multiMediaSchema);

module.exports = MultiMedia;