import React from 'react'
import BasicInfoStyles from './BasicInfo.module.css'

const basicInfo = () => {
    return (
        <div id={BasicInfoStyles['basic-info']}>
            <div><img src="https://lyrictheatreokc.com/wp-content/uploads/2015/09/Geno-Square-Headshot.jpeg"></img></div> 
            <div id={BasicInfoStyles.info}>
                <div id={BasicInfoStyles.name}><p>Billy Jean</p></div>
                <div id={BasicInfoStyles.major}><p>Computer Engineering</p></div>
                <div id={BasicInfoStyles.occupation}><p>Student</p></div>
            </div>
            <div id={BasicInfoStyles.stat}>
                <span>
                    <p>89</p>
                    <p>Projects</p>
                </span>
                <span>
                    <p>155</p>
                    <p>Connections</p>
                </span>
            </div>

            <ul id={BasicInfoStyles.menu}>
                <li><i class="far fa-user"></i>Profile</li>
                <li><i class="fas fa-users"></i>Connections</li>
                <li><i class="fas fa-database"></i>Projects</li>
            </ul>

        </div>
    )
}

export default basicInfo;