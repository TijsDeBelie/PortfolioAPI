const express = require("express");

const router = express.Router();
const caching = require("../middleware/caching");

// eslint-disable-next-line no-unused-vars
router.get("/", caching, (req, res, next) => {
  res.send({ message: "Hello world" });
});

module.exports = router;
