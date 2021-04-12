const express = require('express');
const router = express.Router();

router.use('/clients', require('./clientRoutes'));

module.exports = router;