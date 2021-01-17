import express from 'express';
import {
    getMovies, getMovie, getUpcomingMovies, getTopRatedMovies, getMovieReviews
} from '../tmdb-api';
import movieModel from './movieModel';

const router = express.Router();


router.get('/', (req, res, next) => {
    const id = parseInt(req.params.id);
    getUpcomingMovies()
        .then(movies => res.status(200).send(movies))
        .catch((error) => next(error));
});



export default router;
