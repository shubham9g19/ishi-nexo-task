const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  link: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;