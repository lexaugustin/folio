const Validator = require ('validator');
const isEmpty = require ('./is-empty');


module.exports = function validateProfileInput(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    if(!Validator.isLength(data.username, {min:3, max:20})){
        errors.username = 'The username is too short. Your username should be between 3 and 20 characters';
    }

    if(Validator.isEmpty(data.username)){
        errors.username = 'Username is required';
    }

    if(Validator.isEmpty(data.status)){
        errors.status = 'Status is required';
    }

    if(Validator.isEmpty(data.skills)){
        errors.skills = 'Skills is required';
    }

    if(!isEmpty(data.portfolio)){
        if(!Validator.isURL(data.portfolio)){
            errors.portfolio = 'The URL is not valid';
        }
    }

    // Social Accounts
    
    if(!isEmpty(data.linkedin)){
        if(!Validator.isURL(data.linkedin)){
            errors.linkedin = 'The URL is not valid';
        }
    }

    if(!isEmpty(data.dribble)){
        if(!Validator.isURL(data.dribble)){
            errors.dribble = 'The URL is not valid';
        }
    }

    if(!isEmpty(data.behance)){
        if(!Validator.isURL(data.behance)){
            errors.behance = 'The URL is not valid';
        }
    }

    if(!isEmpty(data.instagram)){
        if(!Validator.isURL(data.instagram)){
            errors.instagram = 'The URL is not valid';
        }
    }

    if(!isEmpty(data.twitter)){
        if(!Validator.isURL(data.twitter)){
            errors.twitter = 'The URL is not valid';
        }
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}