const express = require("express");
const router = express.Router();
const { postBlog, getBlog } = require("../controllers/blog");

// POST /blog
router.post("/", postBlog);

// GET /blog
router.get("/", getBlog);

module.exports = router;
