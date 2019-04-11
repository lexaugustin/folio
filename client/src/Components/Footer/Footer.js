import React from 'react'
import FooterStyles from './Footer.module.css'

const footer = (props) => {
    return (
        <div id={FooterStyles.content}>
            <p>Folio &copy; {new Date().getFullYear()}. All rights reserved</p> 
        </div>
    )
}

export default footer;