const express = require('express');
const Client = require('../models/client');

const clientRouter = express.Router();

clientRouter.post('/api/client', async (req, res) => {
    const { name, document, email, zip, number, complement } = req.body;

    const exists = await User.findOne({email});

    if ( exists ) {
        return res.status(400).json({message: 'User with same email already exists'})
    }
    
    try {
        const hash = await bcryptjs.hash(password, 8);
        let user = new User({
            name, 
            email, 
            password: hash
        });

        user = await user.save();
        res.status(201).json({user});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

module.exports = clientRouter;