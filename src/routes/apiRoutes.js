const express = require("express");
const router = express.Router();
const {
  handleRequest,
  getStats
} = require("../controllers/apiController");

const rateLimiter = require("../middleware/rateLimiter");

router.post("/request", rateLimiter, handleRequest);
router.get("/stats", getStats);

module.exports = router;