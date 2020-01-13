import axios from 'axios';

// API object based on base url. Used method create of axios library
const api = axios.create({
    baseURL: 'http://localhost:3033/api',
})

// Export of function to insert movie to the db
export const insertMovie = (payload) => api.post('/movie', payload);
// Export of function to get all movies from db
export const getAllMovies = () => api.get('/movies');
// Export of function to update a movie by id
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload);
// Export of function to delete a movie from db
export const deleteMovieById = (id) => api.delete(`/movie/${id}`);
// Export of function to get one movie from db
export const getMovieById = (id) => api.get(`/movie/${id}`);

// Abject of all api's functions
const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

// Export of api object as default
export default apis;