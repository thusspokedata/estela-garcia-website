const { Schema, model } = require("mongoose");

const multiMediaSchema = new Schema(
    {
        title: { type: String, required: true },
        youTubeSrc: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const MultiMedia = model("MultiMedia", multiMediaSchema);

module.exports = MultiMedia;