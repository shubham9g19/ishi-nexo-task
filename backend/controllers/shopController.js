const Shop = require("../models/Shop");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

exports.getShops = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const shops = await Shop.find({ user_id: req.user._id });
  res.json({
    shops,
    username: user.username,
    bio: user.bio,
    profile_pic: user.profile_pic,
  });
});

exports.addShops = asyncHandler(async (req, res) => {
  const { shops } = req.body;
  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  const newShops = await Promise.all(
    (shops || []).map((shop) =>
      Shop.create({
        link: shop.link,
        user_id: req.user._id,
        image: shop.image,
        merchant: shop.merchant,
        name: shop.name,
        price: shop.price,
        currency_symbol: shop.currency_symbol,
      })
    )
  );
  res.json(newShops);
});

exports.getPublicShops = asyncHandler(async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const shops = await Shop.find({ user_id: user._id });
  res.json({
    shops,
    username: user.username,
    bio: user.bio,
    profile_pic: user.profile_pic,
  });
});
