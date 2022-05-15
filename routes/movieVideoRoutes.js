const express = require('express');
const router = express.Router();
const movieVideoController = require('../controllers/movieVideoController');

// get a list of Clients from the database
router.get('/', movieVideoController.getAllMovieVideo);

// get one Client from the database
router.get('/:id', movieVideoController.getOneMovieVideo);

// add a new client to database
router.post('/', movieVideoController.addNewMovieVideo);

// update a client in the database
router.put('/:id', movieVideoController.updateMovieVideo);

// delete a client in the database
router.delete('/:id', movieVideoController.deleteMovieVideo);

module.exports = router;