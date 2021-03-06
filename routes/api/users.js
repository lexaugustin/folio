const   express     = require('express'),
        router      = express.Router(),
        bcrypt      = require('bcryptjs'),
        JWT         = require('jsonwebtoken'),
        keys        = require('../../config/keys'),
        passport    = require('passport');

// Load input validation
const validateSignUpInput = require('../../validation/signup');
const validateSignInInput = require('../../validation/signin');

// Load user model
const User = require('../../models/User')

// @route           GET api/auth/test
// @description     Tests auth route
// @access          Public
router.get('/test', (req, res) => res.json(
    { 
        msg: 'Auth Works'
    })
);

// @route           GET api/users/signup
// @descscription   User registration
// @access          Public
router.post('/signup', (req, res) => {

    const {errors, isValid} = validateSignUpInput(req.body);

    // Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    //First find if the email exists
    User.findOne({email: req.body.email})
        .then(user => {
            if(user){
                errors.email = 'This email already exists';
                return res.status(400).json(errors);
                // return res.status(400).json({email: 'Email already exists'})
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                // hash (Encrypt) password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) {
                            throw err;
                        } 
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        });
});


// @route           GET api/users/signin
// @descscription   user signing in / Returnimng JWT token
// @access          Public
router.post('/signin', (req, res) => {

    const {errors, isValid} = validateSignInInput(req.body);

    // Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({email})
        .then(user => {
            // Check for user
            if(!user) {
                errors.email = 'User does not exist';
                return res.status(404).json(errors);
                // return res.status(404).json({email:'User does not exist'});
            }

            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        // User matched

                        // Create JWT payload
                        const payload = {id: user.id, name: user.name } 

                        //Sign token
                        JWT.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        });
                    } else {
                        errors.password = 'Incorrect password';
                        return res.status(400).json(errors);
                        // return res.status(400).json({password: 'Incorrect password'});
                    }
                })
        });
});


// @route           GET api/users/loggedin
// @descscription   Return the current logged-in user
// @access          Private
router.get('/loggedin', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});


module.exports = router;