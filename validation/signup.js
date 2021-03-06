const Validator = require ('validator');
const isEmpty = require ('./is-empty');


module.exports = function validateSingUpInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if(!Validator.isLength(data.name, {min:2, max: 30})) {
        errors.name = "Name is too short";
    }

    if(Validator.isEmpty(data.name)){
        errors.name = 'Your name is required';
    }

    if(Validator.isEmpty(data.email)){
        errors.email = 'Your email is required';
    }

    if(!Validator.isEmail(data.email)){
        errors.email = 'Your email is invalid';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Your password is required';
    }

    if(!Validator.isLength(data.password, {min:8, max:20})){
        errors.password = 'Password must be at least 8 characters';
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm password';
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords are not identical';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}