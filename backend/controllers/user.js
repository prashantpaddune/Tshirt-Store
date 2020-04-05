const User = require('../models/user');

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user)=> {
        if(err || !user){
            return res.status(400).json({
                err : 'No User Found in DB'
            });
        };
        res.profile = user;
        next();
    });
};

exports.getUser = (req, res) => {
    res.profile.salt = undefined;
    res.profile.encry_password = undefined;
    res.profile.createdAt = undefined;
    res.profile.updatedAt = undefined;
    return res.json(res.profile);
}

exports.getAllUsers = (req, res) => {
    User.find().exec((err, users) => {
        if(err || !users) {
            return res.status(400).json({
                error: 'No Users Found'
            });
        }
        res.json(users);
    });
};

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        {_id: res.profile._id},
        {$set: req.body},
        {new: true, useFindAndModify: false},
        (err, user) => {
            if(err) {
                return res.status(400).json({
                    error: 'You are not authorised too update the information'
                });
            }
            user.salt = undefined;
            user.encry_password = undefined;
            user.createdAt = undefined;
            user.updatedAt = undefined;
            res.json(user);
        }
    );
};