import React, {Component} from 'react'
import axios from 'axios';

import SignupStyles from './Signin.module.css'

import Footer from '../Footer/Footer'

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
        
        axios.post('api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div id={SignupStyles.content}>
                <div id={SignupStyles.left}></div>
                
                <div id={SignupStyles.right}>

                    <div id={SignupStyles.title}>
                        <h1>Sign Up</h1>
                        <p>Create your Folio Account</p>
                    </div>

                    <form id={SignupStyles.form} onSubmit={this.onSubmit}>
                        <div id={SignupStyles.input}>
                            <input 
                                type="text" 
                                className={SignupStyles['email-input']} 
                                name="name" 
                                value={this.state.name} 
                                placeholder="Name"
                                onChange={this.onChange}
                            />
                        </div>

                        <div id={SignupStyles.input}>
                            <input 
                                type="email" 
                                className={SignupStyles['email-input']} 
                                name="email" 
                                value={this.state.email} 
                                placeholder="Enter email"
                                onChange={this.onChange}
                            />
                        </div>

                        <div id={SignupStyles.input}>
                            <input 
                                type="password" 
                                className={SignupStyles['password-input']} 
                                name="password" 
                                value={this.state.password} 
                                placeholder="Password"
                                onChange={this.onChange}
                            />
                        </div>

                        <div id={SignupStyles.input}>
                            <input 
                                type="password" 
                                className={SignupStyles['password-input']} 
                                name="password2" 
                                value={this.state.password2} 
                                placeholder="Confirm Password"
                                onChange={this.onChange}
                            />
                        </div>

                        <button id={SignupStyles.button} type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    <div id={SignupStyles.footer}>
                        <Footer/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Signup;