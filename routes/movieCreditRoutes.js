const express = require('express');
const router = express.Router();
const movieCreditController = require('../controllers/movieCreditController');

// get a list of Clients from the database
router.get('/', movieCreditController.getAllMovieCredit);

// get one Client from the database
router.get('/:id', movieCreditController.getOneMovieCredit);

// add a new client to database
router.post('/', movieCreditController.addNewMovieCredit);

// update a client in the database
router.put('/:id', movieCreditController.updateMovieCredit);

// delete a client in the database
router.delete('/:id', movieCreditController.deleteMovieCredit);

module.exports = router;