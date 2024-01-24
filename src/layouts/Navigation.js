import React from 'react';
import { NavLink } from 'react-router-dom'
import "../styles/Naviagtion.css"

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "Projekty", path: "/project" },
    { name: "Kontakt", path: "/contact" },
    { name: "Panel admin", path: "/admin" },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;