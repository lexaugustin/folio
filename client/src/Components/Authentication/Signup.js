import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { signUpUser } from '../../actions/authActions';

// Styles
import SignupStyles from './Signin.module.css'

// Components
import TextField from '../Common/TextField'

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        if( this.props.auth.isAuthenticated) {
            this.props.history.push('/userprofile');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.signUpUser(newUser, this.props.history);
    
    }

    render() {

        // Same as doing "const errors = this.state.errors;"
        const { errors } = this.state;

        return (
            // <div id={SignupStyles.content}>
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-md-8 m-auto">
            //                 <h1 className="display-4 text-center">Sign Up</h1>
            //                 <form noValidate onSubmit={this.onSubmit}>

            //                     <TextField
            //                         placeholder="Name"
            //                         name="name"
            //                         type="text"
            //                         value={this.state.name}
            //                         onChange={this.onChange}
            //                         error={errors.name}
            //                     />

            //                     <TextField
            //                         placeholder="Email"
            //                         name="email"
            //                         type="email"
            //                         value={this.state.email}
            //                         onChange={this.onChange}
            //                         error={errors.email}
            //                     />

            //                     <TextField
            //                         placeholder="Password"
            //                         name="password"
            //                         type="password"
            //                         value={this.state.password}
            //                         onChange={this.onChange}
            //                         error={errors.password}
            //                     />

            //                     <TextField
            //                         placeholder="Confirm Password"
            //                         name="password2"
            //                         type="password"
            //                         value={this.state.password2}
            //                         onChange={this.onChange}
            //                         error={errors.password2}
            //                     />

            //                     <input type="submit" className="btn btn-info btn-block mt-4" />
                                
            //                 </form>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            <div id={SignupStyles.content}>

                <div id={SignupStyles.picture}>
                    
                </div>

                <div id={SignupStyles.form}>
                    <form onSubmit={this.onSubmit}>
                        <h1>Sign Up</h1>

                        <TextField
                            id={SignupStyles.input}
                            placeholder="Name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                        />

                        <TextField
                            id={SignupStyles.input}
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                        />

                        <TextField
                            id={SignupStyles.input}
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                        />

                        <TextField
                            id={SignupStyles.input}
                            placeholder="Confirm Password"
                            name="password2"
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            error={errors.password2}
                        />

                        <div><a href="#">Forgot your password?</a></div>

                        <button>Sign Up</button>
                    </form>
                </div>

            </div>
        )
    }
}

Signup.propTypes = {
    signUpUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {signUpUser})(withRouter(Signup));