// get nec models
const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts (req, res) {
        try {
            const thoughts = await Thought.find();

            // send results as json
            res.json(thoughts);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // create new thought
    async createThought (req, res) {
        try {
            const thought = await Thought.create(req.body);

            // push thought id to user's thoughts array
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            );

            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'Thought created, but user not found' });
            }

            // show newly created thought
            res.json(thought);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    },

    // get one thought by id
    async getSingleThought (req, res) {
        try {
            // get one thought with matching id and exclude __v
            const thought = await Thought.findOne({ _id: req.params.id})
            .select('-__v');

            // give 404 error if thought not found
            if(!thought) {
                res.status(404).json({message: 'Thought not found'});
            }

            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a thought
    async updateThought (req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                // get thought by id
                { _id: req.params.id },
                // update
                { $set: req.body },
                // make sure update fits validation and get newly updated results
                { runValidators: true, new: true }
            );

            // give 404 error if thought not found
            if (!thought) {
                res.status(404).json({message: 'Thought not found'});
            }

            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // remove a thought
    async removeThought (req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.id });

            // give 404 error if thought not found
            if (!thought) {
                res.status(404).json({message: 'Thought not found'});
            }

            res.json({ message: 'Thought deleted' });
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // create a new reaction to a thought
    async createReaction (req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                // add body content to the reaction section as a subdoc
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            // give 404 error if thought not found
            if (!thought) {
                res.status(404).json({message: 'Thought not found'});
            }

            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // remove a reaction from a thought
    async removeReaction (req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                // remove reaction by using its id to find then pull it
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};