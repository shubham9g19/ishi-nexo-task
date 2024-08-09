const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  link: { type: String, required: true },
  image: { type: String, required: true },
  merchant: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number },
  currency_symbol: { type: String },
});

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
