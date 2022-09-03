const { Schema, model } = require("mongoose");

const concertSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },

    imageUrl: String,
    aboutEvent: {
      type: String,
      require: true,
    },
    date: {
      day: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Concert = model("Concert", concertSchema);

module.exports = Concert;
