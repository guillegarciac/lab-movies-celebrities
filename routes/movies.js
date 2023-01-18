// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

// all your routes here

/* GET all movies */
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find({});
    res.render("movies/movies", { movies });
  } catch (error) {
    next(error)
  }   
})

/* GET new-movies - form to get celebrities in dropdown later with >multiple */
router.get("/create", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find({});
    res.render("movies/new-movie", { celebrities });
  } catch (error) {
    next(error);
  }
})

/* POST new-movie in database */
router.post("/create", async (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
})

/* GET movie-details + id*/
router.get("/details/:movieId", async (req, res, next) => {
  const { movieId } = req.params;
  try {
    const movieSelected = await Movie.findById(movieId).populate("cast");
    res.render("movies/movie-details", movieSelected);
  } catch (error) {
    next(error);
  }
})

module.exports = router;