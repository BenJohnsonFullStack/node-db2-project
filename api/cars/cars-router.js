const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("testing get");
});

router.get("/:id", (req, res, next) => {
  res.json("testing get by id");
});

router.post("/", (req, res, next) => {
  res.json("testing post");
});

module.exports = router;
