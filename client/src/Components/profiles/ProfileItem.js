import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import Styles from './ProfileStyles.module.css'

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      
      // <div className="card card-body bg-light mb-3">

      //   <div className="row">

      //     <div className="col-2">
      //       <img src={profile.user.avatar} alt="" className="rounded-circle" />
      //     </div>

      //     <div className="col-lg-6 col-md-4 col-8">
      //       <h3>{profile.user.name}</h3>
      //       <p>
      //         {profile.status}{' '}
      //         {isEmpty(profile.company) ? null : (
      //           <span>at {profile.company}</span>
      //         )}
      //       </p>
      //       <p>
      //         {isEmpty(profile.location) ? null : (
      //           <span>{profile.location}</span>
      //         )}
      //       </p>
      //       <Link to={`/profile/${profile.username}`} className="btn btn-info">
      //         View Profile
      //       </Link>
      //     </div>

      //     <div className="col-md-4 d-none d-md-block">
      //       <h4>Skill Set</h4>
      //       <ul className="list-group">
      //         {profile.skills.slice(0, 4).map((skill, index) => (
      //           <li key={index} className="list-group-item">
      //             <i className="fa fa-check pr-1" />
      //             {skill}
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
          
      //   </div>

      // </div>

      <div className="card card-body bg-light mb-3">

        <div id={Styles.content}>

          <div className={Styles.avatar}>
            <img src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-grey-photo-placeholder-male-default-profile-gray-person-picture-isolated-white-background-good-man-102846161.jpg" alt="" className="rounded-circle" />
          </div>

          <div className={Styles.info}>
            <h3>{profile.user.name}</h3>
            <p>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
          </div>

          <div className={Styles.skills}>
            <h6>Top Skils</h6>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className={Styles.viewProfileButton}>
            <Link to={`/profile/${profile.username}`} className="btn btn-warning btn-md">
              View Profile
            </Link>
          </div>
          
        </div>

      </div>

    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
