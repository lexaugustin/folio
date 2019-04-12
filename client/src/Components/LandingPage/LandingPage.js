import React from 'react'
import LandingPageStyles from './LandingPage.module.css'
import { Link } from 'react-router-dom'

import Footer from '../Footer/Footer'

const landingPage = (props) => {
    return (
        <div id={LandingPageStyles.content}>
            <div id={LandingPageStyles.left}>
                
            </div>

            <div id={LandingPageStyles.right}>
            
                <div id={LandingPageStyles.buttons}>
                    <div id={LandingPageStyles['signin-button']}>
                        <Link to="/Signin">
                            <button type="button" class="btn btn-light">Sign In</button>
                        </Link>
                    </div>
                    <div id={LandingPageStyles['signin-button']}>
                        <Link to="/Signin">
                            <button type="button" class="btn btn-primary">Sign Up</button>
                        </Link>
                    </div>
                </div>

                <div id={LandingPageStyles.footer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default landingPage;