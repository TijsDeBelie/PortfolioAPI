const express = require("express");
const axios = require("axios");
const router = express.Router();
const caching = require("../middleware/caching");
const fetch = require("node-fetch");

var result = {};

fetch("https://api.github.com/users/TijsDeBelie/repos")
  .then((res) => res.json())
  .then((json) => (result = json));

// eslint-disable-next-line no-unused-vars
router.get("/", (req, res, next) => {
  res.send(result);
});

module.exports = router;
