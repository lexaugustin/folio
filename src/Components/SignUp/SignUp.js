import React from 'react'
import SignUpStyles from './SignUp.module.css'

const signUp = () => {
    return (
        <div id={SignUpStyles['signUp']}>
            <div id={SignUpStyles['image']}></div>
            <div id={SignUpStyles['form']}>
                <div id={SignUpStyles.title}>
                    <h2 id={SignUpStyles.logo}>Folio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus, turpis at porttitor sagittis, quam mauris tempor orci, a faucibus tortor leo sed odio. Aliquam quis tincidunt leo.</p>
                </div>

                <div id={SignUpStyles['account-info']}>
                    <input placeholder="First name"></input>
                    <input placeholder="Last name"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Password"></input>
                </div>

                <div id={SignUpStyles['account-type']}>
                    <p>What type of account you would like to create?</p>

                    <input name="account-type" id="student" type="radio" value="STUDENT"/>
                    <label for="student">Student</label>

                    <input name="account-type" id="professional" type="radio" value="PROFESSIONAL"/>
                    <label for="professional">Professional</label>
                    
                    <input name="account-type" id="recruiter" type="radio" value="RECRUITER"/>
                    <label for="recruiter">Recruiter</label>
                </div>

                <input type="submit" value="Sign Up"/>

                <p id={SignUpStyles.already}>Already have an account? <a href="">sign in</a></p>
            </div>

        </div>
    )
}

export default signUp;