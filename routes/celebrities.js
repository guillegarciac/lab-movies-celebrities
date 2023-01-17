// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require('express');
const router = express.Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

/* GET all celebrities */
router.get('/', async (req, res, next) => {
  // Iteration #2: List the celebrities
  try {
    const celebrities = await Celebrity.find({});
    res.render("celebrities/celebrities", { celebrities });
  } catch (error) {
    next(error);
  }
});

/* GET new-celebrities - form to create a celebrity */
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
})

/* POST new-celebrities - send the data from the form to this route to create the celebrity and save it to the database */
router.post("/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect('/celebrities');
  } catch (error) {
    res.redirect("/celebrities/create");
  }
})

module.exports = router;