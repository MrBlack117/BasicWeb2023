const express = require('express');
const {Server} = require("socket.io");
const app = express();
const server = require('http').createServer(app);
const io = new Server(server);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
})

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + '/style.css');
})

connections = []

io.sockets.on('connection', function (socket) {
    connections.push(socket);

    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket), 1);
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', {text: msg.text, user: msg.user, color: msg.color});
    });

})


// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//     });
// });

server.listen(3000);