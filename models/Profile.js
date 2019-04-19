const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Profle Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    username: {
        type: String,
        required: true,
        max: 30             // 30 characters maximum
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String,
    },
    portfolio: {
        type: String
    },
    githubUsername: {
        type: String
    },
    social: {
        linkedin: {
            type: String,
        },
        github: {
            type: String,
        },
        dribble: {
            type: String
        },
        behance: {
            type: String,
        },
        instagram: {
            type: String,
        },
        twitter: {
            type: String,
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    education: [{
        school: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        major: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        current: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
        }
    }],
    experience: [{
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        location: {
            type: String
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        current: {
            type: Boolean,
            default: false,
        },
        description: {
            type: String,
        }
    }]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);