import React, { Component } from 'react'

import FormLogin from '../../components/form-login'

import io from 'socket.io-client'

import './styles.css'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4++">
                        <FormLogin />
                    </div>
                </div>
            </div>
        )
    }
}
