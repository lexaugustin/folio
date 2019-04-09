const Validator = require ('validator');
const isEmpty = require ('./is-empty');


module.exports = function validateSingInInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)){
        errors.email = 'Your email is invalid';
    }

    if(Validator.isEmpty(data.email)){
        errors.email = 'Your email is required';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Your password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}