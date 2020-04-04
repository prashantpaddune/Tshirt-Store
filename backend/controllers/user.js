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
    return res.json(res.profile);
}