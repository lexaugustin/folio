import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import  { getCurrentProfile, deleteAccount} from '../actions/profileActions';
// import { Link } from 'react-router-dom';

// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Delete extends Component {
	componentDidMount() {
			this.props.getCurrentProfile();
	}

	onDeleteClick(e) {
			this.props.deleteAccount();
	}

	render() {
		const { profile } = this.props.profile;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<h1>
						Delete Account
					</h1>
					<div></div>
					<div>
						Note: If you are having an account issue (e.g. missing experiences, missing projects, incorrect connections, suspicious job posts or potential account compromise), deactivating and reactivating your account will not resolve it. Please refer to our troubleshooting articles or contact Support.
					</div>
					<h2>
						Before you deactivate your account, you should know
					</h2>
					<div>
						You do not need to deactivate your account to change your username or email address; you can change it at any time in your account settings.
						To use a username or email address on another account, you must first change them and then confirm the change prior to deactivation.  See the below section on how to make your username or email address available for re-use before deactivating your account.
						We do not control content indexed by search engines like Google or Bing.
						When deactivated, your Folio account, including your display name, username, and public profile, will no longer be viewable on folio.com.
						For up to 30 days after deactivation it is still possible to restore your Twitter account if it was accidentally or wrongfully deactivated. Help with account deactivation
					</div>
					<h2>
						How to deactivate your account
					</h2>
					<div>
						Learn how to deactivate your account. If that doesn't work, come back to this page for more troubleshooting.
					</div>
					<h2>
						I tried to deactivate, but it says I have the wrong password
					</h2>
					<div>
						You may need to reset your password. Try requesting a password reset email.
					</div>
					<h2>
						I lost access to the email address I used to set up the account
					</h2>
					<div>
						Deactivation is an action that must be taken by the confirmed account holder or by request of a confirmed account holder. Unfortunately, unless you can contact us from the confirmed email address (or have access to the verified mobile number on the account), we will be unable to deactivate the account on your behalf.
					</div>
					<h2>
						I deactivated my account, but it keeps getting reactivated
					</h2>
					<div>
						If you receive an email that your account has been reactivated, and you did not log in to reactivate, your account may have been compromised. If you suspect your account may be compromised, follow instructions on how to secure your account. After you have successfully changed your password and reviewed your account connections, you can deactivate your account again.
					</div>
					<button
							onClick={this.onDeleteClick.bind(this)}
							className="btn btn-danger"
					>
							Delete My Account
					</button>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

Delete.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

const styles ={
	button: {
		margin: 15
	}
}

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Delete);
