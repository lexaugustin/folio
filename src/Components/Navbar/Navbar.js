import React from 'react'
import NavbarStyles from './Navbar.module.css'

const navbar = () => {
    return (
        <nav id={NavbarStyles.nav}>
            <div id={NavbarStyles.logo}>
                <h3>Folio</h3>
            </div>

            <div id={NavbarStyles.search}>
                <input placeholder="Search"/>
            </div>

        </nav>
    )
}

export default navbar;