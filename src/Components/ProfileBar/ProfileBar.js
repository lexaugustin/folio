import React from 'react'
import ProfileBarStyles from './ProfileBar.module.css'

const profileBar = () => {
    return (
        <div id={ProfileBarStyles.sidebar}> 
            <div id={ProfileBarStyles.logo}>Folio</div>

            <div id={ProfileBarStyles.profile}>
                <div id={ProfileBarStyles.portrait}>
                    <img src="https://lyrictheatreokc.com/wp-content/uploads/2015/09/Geno-Square-Headshot.jpeg"/>
                </div>
                <div id={ProfileBarStyles.info}>
                    <p>Alexander Augustin</p>
                    <p>Gainesville, Florida</p>
                    {/* <p>Student</p> */}
                </div>
            </div>

            <div id={ProfileBarStyles.stat}>
                <p>123 <span>Projects</span></p>
                <p>155 <span>Connections</span></p>
            </div>

            <ul id={ProfileBarStyles.menu}>
                <li><i class="far fa-user"></i>Profile</li>
                <li><i class="fas fa-users"></i>Connections</li>
                <li><i class="fas fa-database"></i>Projects</li>
                <li><i class="far fa-building"></i>Jobs</li>
            </ul>
        </div>
    )
}

export default profileBar;