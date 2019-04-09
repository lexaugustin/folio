const Validator = require ('validator');
const isEmpty = require ('./is-empty');


module.exports = function validateEducationInput(data) {
    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.major = !isEmpty(data.startDate) ? data.startDate : '';
    data.startDate = !isEmpty(data.startDate) ? data.startDate : '';

    if(Validator.isEmpty(data.school)){
        errors.school = 'School is required';
    }

    if(Validator.isEmpty(data.degree)){
        errors.degree = 'Degree is required';
    }

    if(Validator.isEmpty(data.major)){
        errors.major = 'Major is required';
    }

    if(Validator.isEmpty(data.startDate)){
        errors.startDate = 'Start date is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}