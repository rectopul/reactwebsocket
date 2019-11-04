const uuidv4 = require('uuid/v4')
/**
 *  createUser
 *  Creates a user
 */

const createUser = ({ name = '' } = {}) => ({
    id: uuidv4(),
    name,
})

/**
 *  Create message
 *  Creates a message
 */

const createMessage = ({ message = '', sender = '' } = {}) => ({
    id: uuidv4(),
    time: getTime(new Date(Date.now())),
    message,
    sender,
})
/**
 *  createRoom
 *  Creates a rooms
 */

const createRoom = ({ messages = [], name = 'Comunnity', users = [] } = {}) => ({
    id: uuidv4(),
    name,
    messages,
    users,
    typingUsers: [],
})

/**
 *     @param date {Date}
 *     @return a string represented in 24hr time i.e. '11:30', '19:30'
 */
const getTime = (date) => {
    return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
}

module.exports = {
    createMessage,
    createRoom,
    createUser,
}
