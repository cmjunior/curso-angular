const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: 'Please enter a valid emai address'
        }
    },

    password: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return value.length >= 6;
            },
            message: 'Password minimun length must be at least 6 characters'
        }
    },

    address: {
        type: String,
        default: ''
    },

    type: {
        type: String,
        default: 'user'
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;