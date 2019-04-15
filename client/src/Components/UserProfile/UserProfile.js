import React, {Component} from 'react'
import UserProfileStyles from './UserProfile.module.css'
import  { getCurrentProfile } from '../../actions/profileActions';

// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserProfile extends Component {

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        return (
            <div id={UserProfileStyles.nav}>

            </div>
        )
    }
}

export default connect(null, { getCurrentProfile })(UserProfile);