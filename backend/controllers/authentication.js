const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.signUp = (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            errors: errors.array()[0].msg
        });
    }

    const user = new User(req.body);
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                err : 'Failed to Save User in DB!'
            });
        };
        res.json({
            id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email
        });
    })
};

exports.signOut = (req, res) => {
    res.send('Sign In page');
};