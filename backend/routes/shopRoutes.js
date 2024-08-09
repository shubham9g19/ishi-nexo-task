const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getShops, getPublicShops, addShops } = require("../controllers/shopController");
const router = express.Router();

router.get("/", protect, getShops);
router.get("/:username/public", getPublicShops);
router.post("/bulk-add", protect, addShops);
module.exports = router;
