const   express     = require('express'),
        router      = express.Router(),
        mongoose    = require('mongoose'),
        passport    = require('passport')

// Import profile inputs validation
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');

// Import profile model
const Profile = require('../../models/Profile');
// Import user model
const User = require('../../models/User');


// // @route       GET api/profile/test
// // @desc        Tests profile route
// // @access      Public
// router.get('/test', (req, res) => res.json(
//     {
//         msg: 'Profile Works'
//     })
// );


// @route       GET api/profile
// @desc        This route get the the profile of the user that is logged in
// @access      Private
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    const errors = {};

    Profile.findOne({user: req.user.id})
        .populate('user', ['name'])
        .then(profile => {
            if(!profile) {
                errors.profileNotFound = 'This profile does not exist';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});


// @route       POST api/profile
// @desc        This route is used to create and updating the user profile
// @access      Private
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {

    const {errors, isValid} = validateProfileInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }


    // Get profile data
    const profileData = {};
    profileData.user = req.user.id;
    if(req.body.username) profileData.username = req.body.username;
    if(req.body.company) profileData.company = req.body.company;
    if(req.body.location) profileData.location = req.body.location;
    if(req.body.status) profileData.status = req.body.status;

    if(typeof req.body.skills !== 'undefined'){
        profileData.skills = req.body.skills.split(',');
    }

    if(req.body.bio) profileData.bio = req.body.bio;

    profileData.social = {};
    if(req.body.linkedin) profileData.social.linkedin = req.body.linkedin;
    if(req.body.githubusername) profileData.social.githubusername = req.body.githubusername;
    if(req.body.dribble) profileData.social.dribble = req.body.dribble;
    if(req.body.behance) profileData.social.behance = req.body.behance;
    if(req.body.instagram) profileData.social.instagram = req.body.instagram;
    if(req.body.twitter) profileData.social.twitter = req.body.twitter;

    Profile.findOne({user: req.user.id})
        .then(profile => {
            if(profile) { //If the profile already exists
                // Update the profile
                Profile.findOneAndUpdate({user: req.user.id}, {$set: profileData}, {new: true})
                .then(profile => res.json(profile));
            } else {
                // Create a new profile
                // First, check if the username exists already
                Profile.findOne({username: profileData.username}).then(profile => {
                    if(profile) {
                        errors.username = 'This username exists already';
                        res.status(400).json(errors);
                    }

                    // Save the new profile
                    new Profile(profileData).save().then(profile => res.json(profile));
                });

            }
        });
});


// @route       POST api/profile/username/:username
// @desc        This route is used to get users' profiles by username
// @access      Public
router.get('/username/:username', (req, res) => {
    const errors = {};

    Profile.findOne({username: req.params.username})
        .populate('user', ['name'])
        .then(profile => {
            if(!profile){
                errors.profileNotFound = 'Profile not found for this user';
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});


// @route       POST api/profile/user/:user_id
// @desc        This route is used to get users' profiles by user id
// @access      Public
router.get('/user/:user_id', (req, res) => {
    const errors = {};

    Profile.findOne({user: req.params.user_id})
        .populate('user', ['name'])
        .then(profile => {
            if(!profile){
                errors.profileNotFound = 'Profile not found for this user';
                res.status(404).json(errors);
            }

            res.json(profile);
        })
        .catch(err => res.status(404).json({profile: 'Profile not found for this user'}));
});


// @route       POST api/profile/all
// @desc        This route is used to get all profiles
// @access      Public
router.get('/all', (req, res) => {
    const errors = {};

    Profile.find()
    .populate('user', ['name'])
    .then(profiles => {
        if(!profiles){
            errors.profileNotFound = 'No profile found';
            return res.status(404).json(errors);
        }
        res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'No profile found'}));
});


// @route       POST api/profile/experience
// @desc        This route is used to add new experience to the user's profile
// @access      Private
router.post('/experience', passport.authenticate('jwt', {session: false}), (req, res) => {

    const {errors, isValid} = validateExperienceInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    Profile.findOne({user: req.user.id})
        .then(profile => {
            const newExperience = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                startDate:req.body.startDate,
                endDate: req.body.endDate,
                current: req.body.current,
                description: req.body.description
            }

            //Add the new experience to the experience array
            profile.experience.unshift(newExperience);
            profile.save().then(profile => res.json(profile));
        })

});


// @route       POST api/profile/education
// @desc        This route is used to add new education to the user's profile
// @access      Private
router.post('/education', passport.authenticate('jwt', {session: false}), (req, res) => {

    const {errors, isValid} = validateEducationInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    Profile.findOne({user: req.user.id})
        .then(profile => {
            const newEducation = {
                school: req.body.school,
                degree: req.body.degree,
                major: req.body.major,
                startDate:req.body.startDate,
                endDate: req.body.endDate,
                current: req.body.current,
                description: req.body.description
            }

            //Add the new education to the education array
            profile.education.unshift(newEducation);
            profile.save().then(profile => res.json(profile));
        })

});

// @route       DELETE api/profile/experience/:experience_id
// @desc        This route is used to delete experience from the user's profile
// @access      Private
router.delete('/experience/:experience_id', passport.authenticate('jwt', {session: false}), (req, res) => {

    Profile.findOne({user: req.user.id})
        .then(profile => {
            // Get the index of the experience to be deleted
            const exp_index = profile.experience
                .map(item => item.id)
                .indexOf(req.params.experience_id);

            // Splice the experience array
            profile.experience.splice(exp_index, 1);

            // Save the new spliced array
            profile.save()
                .then(profile => res.json(profile));
        })
        .catch(err => res.status(404).json(err));

});

// @route       DELETE api/profile/education/:education_id
// @desc        This route is used to delete education from the user's profile
// @access      Private
router.delete('/education/:education_id', passport.authenticate('jwt', {session: false}), (req, res) => {

    Profile.findOne({user: req.user.id})
        .then(profile => {
            // Get the index of the education to be deleted
            const edu_index = profile.education
                .map(item => item.id)
                .indexOf(req.params.education_id);

            // Splice the experience array
            profile.education.splice(edu_index, 1);

            // Save the new spliced array
            profile.save()
                .then(profile => res.json(profile));
        })
        .catch(err => res.status(404).json(err));

});


// @route       DELETE api/profile/:
// @desc        This route is used to delete a user and his/her profile
// @access      Private
router.delete('/', passport.authenticate('jwt', {session: false}), (req, res) => {

    Profile.findOneAndRemove({user: req.user.id})
        .then(() => {
            User.findOneAndRemove({_id: req.user.id})
                .then(() => res.json({success: true}));
        });

});

module.exports = router;
