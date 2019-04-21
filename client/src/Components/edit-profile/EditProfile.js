import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Profile Components
import InputField from '../Common/InputField';
import SelectListField from '../Common/SelectListField';
import TextField from '../Common/TextField';
import TextAreaField from '../Common/TextAreaField';
import { createProfile, getCurrentProfile} from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';


class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      username: '',
      company: '',
      location: '',
      status: '',
      skills: '',
      bio: '',
      portfolio: '',
      githubusername: '',
      linkedin: '',
      dribble: '',
      behance: '',
      instagram: '',
      twitter: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
        const profile = nextProps.profile.profile;

        const skillsWithComma = profile.skills.join(',');

        // Checking if the a non-required profile field does not exist to make it an empty string
        profile.company = !isEmpty(profile.company) ? profile.company : '';
        profile.portfolio = !isEmpty(profile.portfolio) ? profile.portfolio : '';
        profile.location = !isEmpty(profile.location) ? profile.location : '';
        profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
        profile.social = !isEmpty(profile.social) ? profile.social : {};
        profile.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';
        profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
        profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';
        profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
        profile.dribble = !isEmpty(profile.social.dribble) ? profile.social.dribble : '';
        profile.behance = !isEmpty(profile.social.behance) ? profile.social.behance : '';

        this.setState({
            username: profile.username,
            company: profile.company,
            portfolio: profile.portfolio,
            location: profile.location,
            status: profile.status,
            skills: skillsWithComma,
            bio: profile.bio,
            linkedin: profile.linkedin,
            githubusername: profile.githubusername,
            dribble: profile.dribble,
            behance: profile.behance,
            instagram: profile.instagram,
            twitter: profile.twitter,
        });
      }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      username: this.state.username,
      company: this.state.company,
      portfolio: this.state.portfolio,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      bio: this.state.bio,
      linkedin: this.state.linkedin,
      githubusername: this.state.githubusername,
      dribble: this.state.dribble,
      behance: this.state.behance,
      instagram: this.state.instagram,
      twitter: this.state.twitter
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>

          <InputField
            placeholder="Linkedin"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputField
            placeholder="Dribble"
            name="dribble"
            icon="fas fa-basketball-ball"
            value={this.state.dribble}
            onChange={this.onChange}
            error={errors.dribble}
          />

          <InputField
            placeholder="Behance"
            name="behance"
            icon="fab fa-behance"
            value={this.state.behance}
            onChange={this.onChange}
            error={errors.behance}
          />

          <InputField
            placeholder="Twitter"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputField
            placeholder="Instagram"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Student', value: 'Student' },
      { label: 'Recruiter', value: 'Recruiter' },
      { label: 'Professional', value: 'Professional' },
      // { label: 'Manager', value: 'Manager' },
      // { label: 'Student or Learning', value: 'Student or Learning' },
      // { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      // { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Profile</h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextField
                  placeholder="* Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  error={errors.username}
                  info="A unique handle for your profile URL. Your full name, company name, nickname"
                />
                <SelectListField
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                />
                <TextField
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <TextField
                  placeholder="Portfolio Website"
                  name="portfolio"
                  value={this.state.portfolio}
                  onChange={this.onChange}
                  error={errors.portfolio}
                />
                <TextField
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="(eg. Gainesville, FL)"
                />
                <TextField
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="List each skill separated by a comma"
                />
                <TextField
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="Include your Github username to showcase your projects repo"
                />
                <TextAreaField
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Links
                  </button>
                  {/* <span className="text-muted">Optional</span> */}
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })( withRouter(CreateProfile) );
