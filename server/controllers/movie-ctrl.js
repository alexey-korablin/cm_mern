const Movie = require('../models/movie-model');

const createMovie = (req, res) => {
    // Get body from request
    const body = req.body;

    // Check if the body doesn't presented, sent response status 400, 
    // and json that contains unsuccess flag and custom message
    if (!body) {
        return res.status(400).json({ 
            success: false, 
            message: 'You must provide a movie'
        });
    }

    // Instantiate new movie with body from request
    const movie = new Movie(body);

    // Check if the movie has been instantiated
    // If not then response with code 400 and json: flag - unsuccess,
    // error object
    if (!movie) {
        return res.status(400).json({ success: false, error: err });
    }

    // Save the instantiated movie, then response with code 201 and json
    // success, movie id and custom message. Catch possible errors.
    // The response should contain status code 400 and json: error and 
    // custom message
    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!'
            })
        .catch(err => {
            return res.status(400).json({
                error: err,
                message: 'Movie not created'
            })
        })
    })
};

const updateMovie = async (req, res) => {
    // Get body from request
    const body = req.body;

    // Check if the body doesn't presented, sent response status 400, 
    // and json that contains unsuccess flag and custom message
    if (!body) {
        return res.status(404).json({
            success: false,
            message: 'You must provide a body to update'
        })
    }

    // Find the movie with method findOne(movie_id, cbfn)
    // cbfn: the error-first function. Checks if error occured then response
    // with status 404, error and message. If not then movie has been found.
    // In this case just prepare object to update: write name, time, rating.
    // Save changes.
    await Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found'
            })
        }

        movie.name = body.name;
        movie.time = body.time;
        movie.rating = body.rating;
        movie.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated'
                });
            })
            .catch(err => {
                return res.status(400).json({
                    error: err,
                    message: 'Movie not updated'
                });
            })
    })
};

const deleteMovie = async (req, res) => {
    // Delete a movie by using method findOneAndDelete. The forst param 
    // is an object with id? the second one is cb fn. The first param 
    // is err, the another one is movie object. If error occured while 
    // getting data from BD then response with code 400, success (false)
    // and err object
    // An error should be processed with catch (logged at least into console)
    await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            });
        }

        // If the wanted movie has not been found then response with code 404
        // success flag(false), and message
        if (!movie) {
            return res.status(404).json({
                success: false,
                message: 'Movie not found'
            });
        }

        // In the case when movie has been found then response with code 200
        // success flag(true) and movie object
        return res.status(200).json({
            success: true,
            data: movie
        })
    })
    .catch(err => {
        console.error(err);
    });

};

const getMovieById = async (req, res) => {
    // Find movie by id by using findOne method.
    // findOne takes to parameters. The first one is object with id
    // The next parameter is cb function. cb func nakes two parameters:
    // error object and movie object
    // On error logs the error
    await Movie.findOne({ _id:  req.params.id }, (err, movie) => {
        // if the error has occured then return response with code 400 and
        // json that contains options success is false and error with object
        // of error
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        // if movie does not found return response with code 404 and json
        // that contains options success is true and error with custom message
        if (!movie) {
            return res.status(404).json({ 
                success: false, error: 'Movie not found'
            });
        }

        // return the response with code 200 and json that contains options:
        // success is true and data with movie 
        return res.status(200).json({ success: true, data: movie })
    })
    .catch(err => console.error(err));
};

const getMovies = async (req, res) => {
    // Get all movies with method find
    // The method find takes two parameters. The first one is empty object
    // The second parameters is cb fn. Cb fn takes two parameters. The first
    // parameter is error object, the second one is list of movies objects
    // Any error logs
    await Movie.find({}, (err, movies) => {
        // if error has occured then return response status code - 200
        // and json that contains options: success is false and error 
        // is error object
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        // if movies is an empty array then return response that contains 
        // options success that is false and error is custom message
        if (!movies.length) {
            return res.status(404).json({ 
                success: false, error: 'Movies not found'
            });
        }

        // return response the status code is 200 and json that contains
        // parameters success is true and data is movies
        return res.status(200).json({ success: true, data: movies });
    })
    .catch(err => console.error(err));
};

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovieById,
    getMovies,
}