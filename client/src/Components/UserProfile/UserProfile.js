import React, {Component} from 'react'
import UserProfileStyles from './UserProfile.module.css'
import  { getCurrentProfile, deleteAccount} from '../../actions/profileActions';
import { Link } from 'react-router-dom';

// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import ProfileActions from './ProfileActions';
import Loading from '../Common/Loading';
import { Experience } from './Experience';
import { Education } from './Education';




class UserProfile extends Component {

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {

        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let userProfileContent;

        if (profile === null || loading) {
            userProfileContent = <Loading />;
        }   else {
                // Check if the current user has a profile
                if (Object.keys(profile).length > 0) {
                userProfileContent = (
                    <div>
                        <p className="lead text-muted">
                            Welcome to Folio 
                            <Link to={`/profile/${profile.username}`}>{user.name}</Link>
                        </p>

                        <ProfileActions/>
                        <Experience experience={profile.experience/>

                        <div style={{ marginBottom: '60px' }} />
                        <button
                            onClick={this.onDeleteClick.bind(this)}
                            className="btn btn-danger"
                        >
                            Delete My Account
                        </button>

                    </div>
                );
            }   else {
                // If the current user has no profile
                userProfileContent = (
                    <div>
                        <p className="lead text-muted">Welcome to Folio {user.name}</p>
                        <p>Please, complete your profile</p>
                        <Link to="/create-profile" className="btn btn-lg btn-info">Create Profile</Link>
                    </div>
                );
            }
        }

        return (
            <div id={UserProfileStyles['user-profile']}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Profile</h1>
                            {userProfileContent}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


UserProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(UserProfile);