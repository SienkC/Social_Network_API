const router = require('express').Router();

// controller for users
const{
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController.js');

// '/api/users'
router.route('/').get(getUsers).post(createUser);

// '/api/users/:id'
router.route('/:id').get(getSingleUser).put(updateUser).delete(removeUser);

// '/api/users/:userId/friends'
router.route('/:id/friends').post(addFriend)

// '/api/users/:userId/friends/:friendId'
router.route('/:id/friends/:friendId').delete(removeFriend);


module.exports = router;


// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id
// BONUS: Remove a user's associated thoughts when deleted.



// '/api/users/:userId/friends/:friendId'

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list