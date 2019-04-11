import React from 'react'
import LandingPageStyles from './LandingPage.module.css'
import Footer from '../Footer/Footer'

const landingPage = (props) => {
    return (
        <div id={LandingPageStyles.content}>
            <div id={LandingPageStyles.left}>
                
            </div>

            <div id={LandingPageStyles.right}>
                <div id={LandingPageStyles.buttons}>
                    <div id={LandingPageStyles['signin-button']}><button type="button" class="btn btn-light">Sign In</button></div>
                    <div><button type="button" class="btn btn-primary">Sign Up</button></div>
                </div>
                <div><Footer/></div>
            </div>
        </div>
    )
}

export default landingPage;