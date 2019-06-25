
const Genre = require('../db/models/Genre');

module.exports = {
    getAllGenres: (req, res) => {
        Genre.find({}).then(g => res.json(g));
    }
}