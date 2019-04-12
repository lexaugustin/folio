import React, {Component} from 'react'

import SigninStyles from './Signin.module.css'

import Footer from '../Footer/Footer'

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

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
    }

    render() {
        return (
            <div id={SigninStyles.content}>
                <div id={SigninStyles.left}></div>
                
                <div id={SigninStyles.right}>

                    <div>
                        <h1>Sign In</h1>
                    </div>

                    <form id={SigninStyles.form} onSubmit={this.onSubmit}>
                        <div id={SigninStyles.input}>
                            <input 
                                type="email" 
                                className={SigninStyles['email-input']} 
                                name="email" 
                                placeholder="Enter email"
                                value={this.state.email} 
                                onChange={this.onChange}
                            />
                        </div>

                        <div id={SigninStyles.input}>
                            <input 
                                type="password" 
                                className={SigninStyles['password-input']} 
                                name="password" 
                                placeholder="Password"
                                value={this.state.password} 
                                onChange={this.onChange}
                            />
                        </div>

                        <button id={SigninStyles.button} type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    <div id={SigninStyles.footer}>
                        <Footer/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Signin;