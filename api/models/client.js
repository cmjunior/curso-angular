const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    document: {
        type: Number,
        required: true,
        unique: true,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
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
            message: 'Please enter a valid email address'
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

    zip: {
        type: String,
        default: ''
    },

    number: {
        type: String,
        default: ''
    },

    complement: {
        type: String,
        default: ''
    },
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;