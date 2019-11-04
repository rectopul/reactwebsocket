import React, { Component } from 'react'

import Routes from './routes'

import './styles.css'

/* Login */

import Footer from './components/footer'

import Header from './components/header'

import Main from './pages/main'

import Layout from './components/layout'

const App = () => (
    <div className="container-fluid App">
        <div className="row">
            <Header />
            <Layout title="Calculadora Baby" />
            <Footer />
        </div>
    </div>
)
export default App
