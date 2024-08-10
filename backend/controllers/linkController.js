const Link = require("../models/Link");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

exports.getLinks = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const links = await Link.find({ user_id: req.user._id });
  res.json({
    links,
    username: user.username,
    bio: user.bio,
    profile_pic: user.profile_pic,
  });
});

exports.addLinks = asyncHandler(async (req, res) => {
  const { links } = req.body;
  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }
  const newLinks = await Promise.all(
    (links || []).map((link) =>
      Link.create({
        link: link.link,
        user_id: req.user._id,
        image: link.image,
        description: link.description,
      })
    )
  );
  res.json(newLinks);
});

exports.getPublicLinks = asyncHandler(async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const links = await Link.find({ user_id: user._id });
  res.json({
    links,
    username: user.username,
    bio: user.bio,
    profile_pic: user.profile_pic,
  });
});
