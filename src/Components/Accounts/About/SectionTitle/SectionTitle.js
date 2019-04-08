import React from 'react'

import SectionTitleStyles from './SectionTitle.module.css'

const title = (props) => {
    return (
        <h3 id={SectionTitleStyles.title}>{props.title}</h3>
    )
}

export default title;