// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { postUserDetails, getUserDetails, updateUserDetails, deleteUser } = require("../controllers/user");

// POST /userDetails
router.post("/", postUserDetails);

// GET /userDetails
router.get("/", getUserDetails);

// UPDATE /userDetails
router.put("/:id", updateUserDetails);

// Delete /userDetails
router.delete("/:id", deleteUser);

module.exports = router;
