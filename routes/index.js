const express = require('express');
const router = express.Router();

router.use('/clients', require('./clientRoutes'));
router.use('/movie', require('./movieRoutes'));
router.use('/movieCast', require('./movieCastRoutes'));
router.use('/movieCredit', require('./movieCreditRoutes'));
router.use('/movieCrew', require('./movieCrewRoutes'));
router.use('/movieGenre', require('./movieGenreRoutes'));
router.use('/movieVideo', require('./movieVideoRoutes'));

module.exports = router;