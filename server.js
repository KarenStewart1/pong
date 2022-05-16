const apiServer = require("./api");
const sockets = require("./sockets");
const io = require("socket.io");
const http = require("http");

const httpServer = http.createServer(apiServer);

const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = 4000;

httpServer.listen(PORT);

sockets.listen(socketServer);
