var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.get("/api/timestamp/:date_string", (req, res) => {
  const { date_string } = req.params;
  res.json({
    echo: date_string
  });
});

app.get(
  "/now",
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.json({ time: req.time });
  }
);

module.exports = app;