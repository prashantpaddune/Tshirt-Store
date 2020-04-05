const User = require('../models/user');
const Order = require('../models/order');

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(400).json({
                err : 'No User Found in DB'
            });
        };
        req.profile = user;
        next();
    });
};

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    req.profile.createdAt = undefined;
    req.profile.updatedAt = undefined;
    return res.json(req.profile);
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
        {_id: req.profile._id},
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

exports.userPurchasedList = (req, res) => {
    Order.find({user: req.profile._id})
    .populate('user', '_id name')
    .exec((err, order) => {
        if(err){
            return res.status(400).json({
                error: 'No Order in this Account'
            });
        };

        return res.json(order);
    });
};
