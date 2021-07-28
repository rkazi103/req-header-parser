const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ greeting: "hello API" });
});

router.get("/whoami", (req, res) => {
  res.status(200).json({
    ipaddress: req.header("x-forwarded-for") || req.socket.remoteAddress,
    language: req.header("accept-language"),
    software: req.header("user-agent"),
  });
});

module.exports = router;
