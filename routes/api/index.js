const router = require('express').Router();

// user routes
const userRoutes = require('./userRoutes');

// thought routes
const thoughtRoutes = require('./thoughtRoutes');

// typing in the URL goes to the folder of the same name
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;