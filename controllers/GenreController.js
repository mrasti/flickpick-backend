
const Genre = require('../db/models/Genre');

// function addDetailsToArray(data) {
//     var response = {};
//     response.count = data.length;
//     response.results = data;
//     return response;
// }

module.exports = {
    getAllGenres: (req, res) => {
        Genre.find({}).then(g => res.json((g)));
    }
}