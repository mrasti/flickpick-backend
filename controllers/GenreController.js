
const Genre = require('../db/models/Genre');
const Movie = require('../db/models/Movie');

module.exports = {
    getAllGenres: (req, res) => {
        Genre.find({}).then(g => res.json(g));
    },
    getMoviesByGenre: (req, res) => {
        var pageSize = 21;
        var skipCount = req.query.page ? parseInt(req.query.page)*pageSize : 0;

        var count = 0;
        Movie.find({genre_ids: parseInt(req.params.id)}).count().then(c => {count=c}).then(() => {
            Movie.find({genre_ids: parseInt(req.params.id)})
            .skip(skipCount)
            .limit(pageSize).then(r => res.json({"result":r, "totalPages": Math.ceil(count/21)}));
        });
    }
}