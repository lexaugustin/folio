import React, { Component } from 'react'
import LandingPageStyles from './LandingPage.module.css'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import Footer from '../Footer/Footer'

class LandingPage extends Component {

    componentDidMount(){
        if( this.props.auth.isAuthenticated) {
            this.props.history.push('/userprofile');
        }
    }

    render() {
        return (
            <div id={LandingPageStyles['landing-page-content']}>
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Folio</h1>
                                <p className="lead">Portfolio Web Application</p>
                                <Link to="/signin" className="btn btn-lg btn-light mr-2">Sign In</Link>
                                <Link to="/registersignup" className="btn btn-lg btn-info">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LandingPage.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(LandingPage);
