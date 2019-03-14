import React from 'react'
import NavbarStyles from './Navbar.module.css'

const navbar = () => {
    return (
        <nav id={NavbarStyles.nav}>
            <div id={NavbarStyles.search}></div>
            <input placeholder="Search"/>
        </nav>
    )
}

export default navbar;