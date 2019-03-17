import React from 'react'
import BasicInfoStyles from './BasicInfo.module.css'

const basicInfo = () => {
    return (
        <div id={BasicInfoStyles['basic-info']}>
            <div><img src="https://i.imgur.com/WdcrH1R.jpg"></img></div> 
            <div id={BasicInfoStyles.info}>
                <div id={BasicInfoStyles.name}><p>Thomas Alva Edison</p></div>
                <div id={BasicInfoStyles.major}><p>Computer Engineering Student</p></div>
            </div>
            {/* <div id={BasicInfoStyles.stat}>
                <span>
                    <p>89</p>
                    <p>Projects</p>
                </span>
                <span>
                    <p>155</p>
                    <p>Connections</p>
                </span>
            </div> */}

            {/* <ul id={BasicInfoStyles.menu}>
                <li><i class="far fa-user"></i>Profile</li>
                <li><i class="fas fa-users"></i>Connections</li>
                <li><i class="fas fa-database"></i>Projects</li>
            </ul> */}

            <div id={BasicInfoStyles.summary}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere justo consectetur quam vehicula, 
                    eu vulputate dui Integer aliquet nec nunc nec consequat. Nullam pharetra posuere erat ut fermentum. 
                    Praesent sapien magna, tempus id lacus in, ornare pharetra diam. Aliquam justo ipsum, vestibulum in 
                    ante eget, pharetra hendrerit diam. Donec nec pharetra ex. Sed eu libero in leo ullamcorper auctor. 
                    Morbi eget tortor lacus. In eleifend mi ut lectus blandit, sed efficitur nisl eleifend. 
                    Mauris aliquam, magna luctus tempus condimentum, nisi ligula vulputate tellus, a pulvinar est turpis 
                    vel sapien. Vivamus in faucibus eros. Fusce blandit facilisis interdum.
                </p>
            </div>

            <ul id={BasicInfoStyles.menu}>
                <li className={BasicInfoStyles.active}>Profile</li>
                <li>Connections</li>
                <li>Projects</li>
            </ul>
        </div>
    )
}

export default basicInfo;