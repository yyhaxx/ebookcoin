const express = require('express')
let app = express();
// console.log(app)
let server = require('http').createServer(app);
// console.log(server)
let io = require('socket.io')(server);
console.log(io);