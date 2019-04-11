import React, {Component} from 'react'
import NavbarStyles from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <nav id={NavbarStyles.nav}>

                <div id={NavbarStyles.content}>
                    <div id={NavbarStyles.logo}>
                        <h3>Folio</h3>
                    </div>

                    <div id={NavbarStyles.summary}>
                        <p>Portfolio Web Application</p>
                    </div>
        
                    {/* <div id={NavbarStyles.search}>
                        <input placeholder="Search"/>
                    </div> */}
                </div>

            </nav>
        )
    }
}

export default Navbar;