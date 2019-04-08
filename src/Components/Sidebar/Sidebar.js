import React from 'react'
import SidebarStyles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div id={SidebarStyles.sidebar}>

            <div id={SidebarStyles.profile}>
                <div id={SidebarStyles.portrait}>
                    <img src="https://lyrictheatreokc.com/wp-content/uploads/2015/09/Geno-Square-Headshot.jpeg"/>
                </div>
                <div id={SidebarStyles.info}>
                    <p>Alexander Augustin</p>
                    <p>Gainesville, Florida</p>
                    {/* <p>Student</p> */}
                </div>
            </div>

            <div id={SidebarStyles.stat}>
                <p>123 <span>Projects</span></p>
                <p>155 <span>Connections</span></p>
            </div>

            <ul id={SidebarStyles.menu}>
                <li><i class="far fa-user"></i>Profile</li>
                <li><i class="fas fa-users"></i>Connections</li>
                <li><i class="fas fa-database"></i>Projects</li>
                <li><i class="far fa-building"></i>Jobs</li>
            </ul>
        </div>
    )
}

export default Sidebar;
