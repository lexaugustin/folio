const Validator = require ('validator');
const isEmpty = require ('./is-empty');


module.exports = function validateExperienceInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.startDate = !isEmpty(data.startDate) ? data.startDate : '';

    if(Validator.isEmpty(data.title)){
        errors.title = 'The job title is required';
    }

    if(Validator.isEmpty(data.company)){
        errors.company = 'The company name is required';
    }

    if(Validator.isEmpty(data.startDate)){
        errors.startDate = 'The start date is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}