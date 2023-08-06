import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import React from "react"
import { BrowserRouter } from "react-router-dom"

import "./App.css"
import Logo from "../Components/Templates/Logo"
import Nav from "../Components/Templates/Nav"
import Routes from "./Routes"
import Footer from "../Components/Templates/Footer"

const app = props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>

export default app
