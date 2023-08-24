// get nec models
const { Thought, User } = require('../models');

module.exports = {
    // get all users
    async getUsers (req, res) {
        try {
            const users = await User.find();

            res.json(users);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // create a new user
    async createUser (req, res) {
        try {
            const user = await User.create(req.body);

            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // get single user
    // and populate thought and friend data
    async getSingleUser (req, res) {
        try {
            // get one user with matching id and exclued __v
            const user = await User.findOne({ _id: req.params.id})
            .select('-__v')
            .populate('thoughts friends');

            // give 404 error if user not found
            if(!user) {
                res.status(404).json({message: 'User not found'});
            }

            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a user
    async updateUser (req, res) {
        try {
            const user = await User.findOneAndUpdate(
                // get user by id
                { _id: req.params.id },
                // update
                { $set: req.body },
                // make sure update fits validation and get newly updated results
                { runValidators: true, new: true }
            );

            // give 404 error if user not found
            if(!user) {
                res.status(404).json({message: 'User not found'});
            }

            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // remove a user
    async removeUser (req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });

            // give 404 error if user not found
            if(!user) {
                res.status(404).json({message: 'User not found'});
            }

            res.json({message: 'User deleted'});
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // add a friend
    async addFriend (req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                // Add given user id to friends
                { $addToSet: { friends: req.body.id } },
                { runValidators: true, new: true }
            );

            // give 404 error if user not found
            if(!user) {
                res.status(404).json({message: 'User not found'});
            }

            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // remove a friend
    async removeFriend (req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                // remove friend by using their id and pulling it
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            // give 404 error if user not found
            if(!user) {
                res.status(404).json({message: 'User not found'});
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};
