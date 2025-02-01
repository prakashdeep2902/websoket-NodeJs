const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const server = http.createServer(app);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("index.js");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
