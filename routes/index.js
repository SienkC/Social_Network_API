const router = require('express').Router();
const apiRoutes = require('./api');

// all /api go to the api folder
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Type /api in URL to access api routes'));

module.exports = router;