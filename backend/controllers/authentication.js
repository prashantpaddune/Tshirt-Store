const User = require('../models/user');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

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

exports.signIn = (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            errors: errors.array()[0].msg
        });
    };

    User.findOne({email}, (err, user)=> {
        if(err | !user){
            return res.status(400).json({
                err : 'Email does not exist'
            });
        };

        if(!user.authenticate(password)){
            res.status(401).json({
                err : 'Email and Password does not match'
            });
        };

        // Create token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);

        // Put token in cookie
        res.cookie('token', token, { expire: new Date() + 5555 });

        // Send response to front end
        const { _id, name, email, role } = user;

        return res.json({
            token,
            user: { _id, name, email, role }
        });
    });
};

exports.signOut = (req, res) => {
    res.res.clearCookie('token');
    res.json({
        message: 'User SignOut Sucessfully'
    });
};