// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

// all your routes here

/* GET all movies */
router.get("/", async (req, res, next) => {
  const movies = await Movie.find({});
  res.render("movies/movies", { movies });
})

/* GET new-movies - form to get celebrities in dropdown later with >multiple */
router.get("/create", async (req, res, next) => {
  const celebrities = await Celebrity.find({});
  res.render("movies/new-movie", { celebrities });
})

/* POST new-movie in database */
router.post("/create", async (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies");
  } catch (error) {
    res.redirect("/movies/create");
  }
})

module.exports = router;