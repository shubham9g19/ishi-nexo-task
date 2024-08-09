const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  link: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;
