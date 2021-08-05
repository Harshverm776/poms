const User = require('../models/user.model');

exports.createUser =  async(req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        company_name: req.body.company_name,
        role: req.body.role
    });
    try {
        const user1 = await user.save();
        res.status(201).json(user1);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.getUser = async(req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json(err);
    }
};