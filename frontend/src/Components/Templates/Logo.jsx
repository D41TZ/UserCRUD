import "./Logo.css"
import logo from "../../Assets/Images/logo.png"
import React from "react"
import { Link } from "react-router-dom"

const component = props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>

export default component
