const { Schema, model } = require("mongoose");

const newsletterSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
});

const Newsletter = model("Newsletter", newsletterSchema);
module.exports = Newsletter;
