import React from 'react'
import FooterStyles from './Footer.module.css'

const footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <p>Folio &copy; {new Date().getFullYear()}. All rights reserved</p> 
        </footer>
    )
}

export default footer;