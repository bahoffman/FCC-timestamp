// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/timestamp", function(req, res) {
  const date = new Date();
  const unix = date.getTime();
  const utc = date.toUTCString();
  res.send({ unix: unix, utc: utc });
});

app.get("/api/timestamp/:date_string", function(req, res) {
  console.log(req.params.date_string);

  if (isNaN(req.params.date_string)) {
    const date = new Date(req.params.date_string);
    const unix = date.valueOf();
    const utc = date.toUTCString();
    res.json({ unix: unix, utc: utc });
  } else {
    const unix = parseInt(req.params.date_string);
    const utc = new Date(unix);
    res.json({ unix: unix, utc: utc });
  }
});






// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
