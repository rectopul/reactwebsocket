const io = require('./index.js')

const { VERIFY_USER, USER_CONNECT, LOGOUT } = require('../Events')

const { createUser } = require('../Factories')
// prettier-ignore
let connectedUsers = { }

module.exports = function(socket) {
    console.log('Socket id: ' + socket.id)

    //Verify Username
    socket.on(VERIFY_USER, (nickname, callback) => {
        if (isUser(connectedUsers, nickname)) {
            callback({ isUser: true, user: null })
        } else {
            callback({ isUser: false, user: createUser({ name: nickname }) })
        }
    })

    socket.on(USER_CONNECT, (user) => {
        console.log(user)

        connectedUsers = addUser(connectedUsers, user)
        socket.user = user

        console.log(connectedUsers)
        socket.broadcast.emit(USER_CONNECT, connectedUsers)
    })
}

function addUser(userList, user) {
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList
}

function removeUser(userList, username) {
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}

function isUser(userList, username) {
    return username in userList
}
