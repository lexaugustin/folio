import React from 'react'
import SignInStyles from './SignIn.module.css'

const signIn = () => {
    return (
        <div id={SignInStyles['signIn']}>
            <div id={SignInStyles.image}></div>
            <div id={SignInStyles['form']}>
                <div id={SignInStyles.title}>
                    <h2 id={SignInStyles.logo}>Folio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus, turpis at porttitor sagittis, quam mauris tempor orci, a faucibus tortor leo sed odio. Aliquam quis tincidunt leo.</p>
                </div>

                <div id={SignInStyles['account-info']}>
                    <input placeholder="Email"></input>
                    <input placeholder="Password"></input>
                </div>

                <p>Don't have an account yet? <a href="">sign up</a></p>
            </div>

        </div>
    )
}

export default signIn;