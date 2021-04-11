const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const http = require('http'); 
const { Socket } = require('socket.io');
const server = http.Server(app);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('client'))

const io = require('socket.io')(server); 
io.on('connection', (socket) => {
  socket.on('message', function(msg) {
    io.emit('message', msg)
  })
})

server.listen(8080, () => {
  console.log('Chat server running');
})