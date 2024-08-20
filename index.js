// routes/index.js
const router = require('express').Router();
const apiRoutes = require('./api');

// Use API routes
router.use('/api', apiRoutes);

// Default response for root URL
router.get('/', (req, res) => {
  res.send('Welcome to the Social Network API!');
});

// Catch all other routes not defined
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
