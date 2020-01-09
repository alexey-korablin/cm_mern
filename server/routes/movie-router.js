// get express
const express = require('express');

// get movie controller
const movieCtrl = require('../controllers/movie-ctrl');

// create router from express
const router = express.Router();

// create route on creating movie. method post, path '/movie', ctr method
// createMovie
router.post('/movie', movieCtrl.createMovie);

// create route on updating muvie. Method put, path '/movie/:id', ctrl 
// method updateMovie
router.put('/movie/:id', movieCtrl.updateMovie);

// create route on deleting movie. Method delete, path '/movie/:id',
// ctrl method deleteMovie
router.delete('/movie/:id', movieCtrl.deleteMovie);

// create route on getting movie. Method get, path '/movie/:id',
// ctrl method getMovieById
router.get('/movie/:id', movieCtrl.getMovieById);

// create route on getting all movies. Method get, path '/movies', ctrl
// method getMovies
router.get('/movies', movieCtrl.getMovies);

module.exports = router;