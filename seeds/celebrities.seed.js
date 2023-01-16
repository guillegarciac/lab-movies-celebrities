const mongoose = require ("mongoose");
const Celebrity = require("../models/Celebrity.model");
const MONGODB_URI = 'mongodb://localhost:27017/lab-movies-celebrities';
mongoose.set('strictQuery', true);
const celebrities = require('../data/celebrities');


mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any celebrity to the database, let's remove all existing ones
    return Celebrity.deleteMany();
  })
  .then(() => {
    return Celebrity.create(celebrities);
  })
  .then(createdCelebrities => console.log(createdCelebrities))
  .then(() => {
    mongoose.disconnect();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });