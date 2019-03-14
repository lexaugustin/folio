import React from 'react'
import FilesStyles from './Files.module.css'

const navbar = (props) => {
    return (
        <div id={FilesStyles.content}>
            <div id={FilesStyles.file}>
                <h3>About</h3>
                <div id={FilesStyles['file-icon']}><i class="far fa-file-alt"></i></div>
                <p>About</p>
            </div>
            <div id={FilesStyles.file}>
                <h3>About</h3>
                <div id={FilesStyles['file-icon']}><i class="far fa-file-alt"></i></div>
                <p>About</p>
            </div>
        </div>
    )
}

export default navbar;