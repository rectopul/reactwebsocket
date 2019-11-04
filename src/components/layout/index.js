import React, { Component } from 'react'

import io from 'socket.io-client'

import { USER_CONNECT, LOGOUT } from '../../Events'

import LoginForm from '../form-login'

export default class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            socket: null,
            user: null,
        }
    }

    componentWillMount() {
        this.initSocket()
    }

    /**
     * Connect And initializes sockets
     */
    initSocket = () => {
        const socket = io(':3001')

        socket.on('connect', () => {
            console.log('Connected')
        })

        socket.on(USER_CONNECT, (user) => {
            console.log(user, 'Conectou')
        })

        this.setState({ socket })
    }

    /**
     *  Set the user property in state
     *  @param user {id:number, name:string}
     */
    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECT, user)
        this.setState({ user })
    }

    /**
     *  Sets the user property in state to null
     */
    logout = () => {
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({ user: null })
    }

    render() {
        const { title } = this.props
        const { socket } = this.state
        return (
            <div className="container">
                <LoginForm socket={socket} setUser={this.setUser} />
            </div>
        )
    }
}
