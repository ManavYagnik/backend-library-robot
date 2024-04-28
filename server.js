const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
exports.io = io;

const PORT = 3551;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
