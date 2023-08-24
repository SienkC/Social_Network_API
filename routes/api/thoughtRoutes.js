const router = require('express').Router();

// controller for thoughts
const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
} = require('../../controllers/thoughtController.js');

// '/api/thoughts'
router.route('/').get(getThoughts).post(createThought);

// '/api/thoughts/:id
router.route('/:id').get(getSingleThought).put(updateThought).delete(removeThought);

// '/api/thoughts/:thoughtId/reactions'
router.route('/:id/reactions').post(createReaction).delete(removeReaction);



// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// PUT to update a thought by its _id

// DELETE to remove a thought by its _id



// '/api/thoughts/:thoughtId/reactions'

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value