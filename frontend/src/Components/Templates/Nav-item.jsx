import "./Nav-item.css"
import React from "react"
import { Link } from "react-router-dom"

const component = props => 
    <Link className="nav-item" to={`/${props.link}`}>
        <i className={`fa fa-${props.icon}`}></i>
        {props.text}
    </Link>

export default component
