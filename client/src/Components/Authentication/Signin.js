import React, {Component} from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { signInUser } from '../../actions/authActions';

// Styles
import SigninStyles from './Signin.module.css'

// Components
import TextField from '../Common/TextField'

class Signin extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/userprofile');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/userprofile');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.signInUser(userData);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        // Same as doing "const errors = this.state.errors;"
        const { errors } = this.state;

        return (
            <div id={SigninStyles.content}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign In</h1>
                            <form onSubmit={this.onSubmit}>
                                
                                <TextField
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />

                                <TextField
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    error={errors.password}
                                />

                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


Signin.propTypes = {
    signInUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { signInUser })(Signin);