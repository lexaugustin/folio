import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Loading from '../Common/Loading';
import { getProfileByUsername } from '../../actions/profileActions';
import IconButton from '@material-ui/core/IconButton';

// Icons
import work from '../../work.svg';
import info from '../../info.svg';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.username) {
      this.props.getProfileByUsername(this.props.match.params.username);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  state = {
    step : 1
  }

  //Go to Projects
  toProjects = () => {
    const{ step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  //Go to About
  toAbout = () => {
    const{ step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      return (
        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Loading />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
        if(profile.githubusername) {
          const{ step } = this.state;
          switch( step ) {
            case 1:
              return (
                <div className="profile">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                      <div>
                        <div className="row">
                          <div className="col-md-6">
                            <Link to="/profiles" className="btn btn-light mb-3 float-left">
                              Back To Profiles
                            </Link>
                          </div>
                          <div className="col-md-6" />
                        </div>
                        <ProfileHeader profile={profile} />
                        <div className="row">
                        <IconButton label="About" >
                          <img src={info} alt="About" height={35} width={40} />
                          About
                        </IconButton>
                        <IconButton label="Projects" onClick={this.toProjects}>
                          <img src={work} alt="Projects" height={35} width={40} />
                          Projects
                        </IconButton>
                        </div>
                        <ProfileAbout profile={profile} />
                        <ProfileCreds
                          education={profile.education}
                          experience={profile.experience}
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 2:
              return (
                <div className="profile">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                      <div>
                        <div className="row">
                          <div className="col-md-6">
                            <Link to="/profiles" className="btn btn-light mb-3 float-left">
                              Back To Profiles
                            </Link>
                          </div>
                          <div className="col-md-6" />
                        </div>
                        <ProfileHeader profile={profile} />
                        <div className="row">
                        <IconButton label="About" onClick={this.toAbout}>
                          <img src={info} alt="About" height={35} width={40} />
                          About
                        </IconButton>
                        <IconButton label="Projects">
                          <img src={work} alt="Projects" height={35} width={40} />
                          Projects
                        </IconButton>
                        </div>
                        <ProfileGithub username={profile.githubusername} />
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
          default:
            return (
              <div className="profile">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                    <div>
                      <div className="row">
                        <div className="col-md-6">
                          <Link to="/profiles" className="btn btn-light mb-3 float-left">
                            Back To Profiles
                          </Link>
                        </div>
                        <div className="col-md-6" />
                      </div>
                    <ProfileHeader profile={profile} />
                    <div className="row">
                    <IconButton label="About" onClick={this.toAbout}>
                      <img src={info} alt="About" height={35} width={40} />
                      About
                    </IconButton>
                    <IconButton label="Projects">
                      <img src={work} alt="Projects" height={35} width={40} />
                      Projects
                    </IconButton>
                    </div>
                    <ProfileAbout profile={profile} />
                    <ProfileCreds
                      education={profile.education}
                      experience={profile.experience}
                    />
                    {profile.githubusername ? (
                      <ProfileGithub username={profile.githubusername} />
                    ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          }
        } else {
          return (
            <div className="profile">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <Link to="/profiles" className="btn btn-light mb-3 float-left">
                          Back To Profiles
                        </Link>
                      </div>
                      <div className="col-md-6" />
                    </div>
                    <ProfileHeader profile={profile} />
                    <div className="row">
                    <IconButton label="About">
                      <img src={info} alt="About" height={35} width={40} />
                      About
                    </IconButton>
                    <IconButton label="Projects" onClick={this.toProjects}>
                      <img src={work} alt="Projects" height={35} width={40} />
                      Projects
                    </IconButton>
                    </div>
                    <ProfileAbout profile={profile} />
                    <ProfileCreds
                      education={profile.education}
                      experience={profile.experience}
                    />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          );
      }
    }

  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByUsername })(Profile);
