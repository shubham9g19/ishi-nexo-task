const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getLinks, getPublicLinks, addLinks } = require('../controllers/linkController');
const router = express.Router();

router.get('/', protect, getLinks);
router.post("/bulk-add", protect, addLinks);
router.get("/:username/public", getPublicLinks);

module.exports = router;