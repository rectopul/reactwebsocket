import React, { Component } from 'react'

import './styles.css'

import { VERIFY_USER, USER_CONNECT } from '../../Events'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nickname: '',
            error: '',
        }
    }

    setUser = ({ user, isUser }) => {
        console.log(user, isUser)

        if (isUser) {
            this.setError('User name Taken')
        } else {
            this.props.setUser(user)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { socket } = this.props
        const { nickname } = this.state

        socket.emit(VERIFY_USER, nickname, this.setUser)
    }

    handleChange = (e) => {
        this.setState({ nickname: e.target.value })
    }

    setError = (error) => {
        this.setState({ error })
    }
    render() {
        const { nickname, error } = this.state

        return (
            <form onSubmit={this.handleSubmit} className="user-login">
                <div className="form-group">
                    <label htmlFor="inputlogin">Login</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputlogin"
                        aria-describedby="login"
                        placeholder="Login"
                        ref={(input) => {
                            this.textInput = input
                        }}
                        value={nickname}
                        onChange={this.handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.emitmessage}>
                    Entrar
                </button>
                <div className="error">{error ? error : null}</div>
            </form>
        )
    }
}
