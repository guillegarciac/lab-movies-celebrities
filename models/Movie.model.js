//  Add your code here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'You must enter a title']
    },
    genre: {
        type: String,
    },
    plot: {
        type: String,
    },
    cast: {
        type: [Schema.Types.ObjectId],
        ref: 'Celebrity'
    }
},
{
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;