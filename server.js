const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const app = express();

const opts = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem")
};

app.use(express.static(path.join(__dirname, "public")));
https.createServer(opts, app).listen(80);
