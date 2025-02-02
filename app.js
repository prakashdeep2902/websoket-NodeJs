const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`a new user has connected ${socket.id}`);
});
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("index.js");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
