var app = require('express')()
var http = require('http').createServer(app)
// prettier-ignore
var io = module.exports.io = require('socket.io')(http)

const SocketManager = require('./socketmaganer')

io.on('connection', SocketManager)

http.listen(3001, function() {
    console.log('listening on *:3001')
})
