import React from 'react'
import AboutStyles from './About.module.css'

const navbar = (props) => {
    return (
        <div id={AboutStyles.content}>
            <div id={AboutStyles.experience}>
                <h3>Experience</h3>
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

            <div id={AboutStyles.education}>
                <h3>Education</h3>
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
        </div>
    )
}

export default navbar;