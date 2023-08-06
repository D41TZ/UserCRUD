import "./Nav.css"
import React from "react"

import Item from "./Nav-item"

const conteudo = props => 
    <aside className="menu-area">
        <nav className="menu">
            <Item icon="home" link="" text="Início" />
            <Item icon="users" link="users" text="Usuários" />
        </nav>
    </aside>

export default conteudo