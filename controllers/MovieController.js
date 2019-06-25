
const Movie = require('../db/models/Movie');

function addDetailsToArray(data) {
    var response = {};
    response.count = data.length;
    response.results = data;
    return response;
}

module.exports = {
    getRandomFive: (req, res) => {
        var skipCount = Math.floor(Math.random()*1995);
        Movie.find({}).skip(skipCount).limit(5).then(m => res.json(addDetailsToArray(m)));
    },
    getById: (req, res) => {
        Movie.find({id: req.params.id}).then(m => res.json(addDetailsToArray(m)));
    },
    getByTitle: (req, res) => {
        Movie.find({title: req.params.title}).then(m => res.json(addDetailsToArray(m)));
    }
}