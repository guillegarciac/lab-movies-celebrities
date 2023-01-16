//  Add your code here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
    name: {
        type: String,
        unique: true,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    catchPhrase: {
        type: String,
        required: true,
    }
})

const Celebrity = model('Celebrity', celebritySchema);

module.exports = Celebrity;