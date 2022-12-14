const { Schema, model } = require("mongoose");

const concertSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      lowercase: true,
      trim: true,
    },
    addressNumber: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    zipCode: {
      type: String,
      trim: true,
    },
    imageUrl: String,
    publicId: String,
    aboutEvent: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Concert = model("Concert", concertSchema);

module.exports = Concert;
