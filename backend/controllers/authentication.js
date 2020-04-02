const User = require('../models/user');

exports.signUp = (req, res) => {
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