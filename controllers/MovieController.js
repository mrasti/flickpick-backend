const Movie = require("../db/models/Movie");

function addDetailsToArray(data) {
  var response = {};
  response.count = data.length;
  response.results = data;
  return response;
}

module.exports = {
  getAllMovies: (req, res) => {
    Movie.find({}).then(m => res.json(addDetailsToArray(m)));
  },
  getRandomMovies: (req, res) => {
    var skipCount = Math.floor(Math.random() * 1979);
    Movie.find({})
      .skip(skipCount)
      .limit(21)
      .then(m => res.json(addDetailsToArray(m)));
  },
  getById: (req, res) => {
    Movie.find({ id: req.params.id }).then(m => res.json(addDetailsToArray(m)));
  },
  searchByTitle: (req, res) => {
    Movie.find({ title: new RegExp(req.params.title, "ig") }).limit(21).then(m =>
      res.json(addDetailsToArray(m))
    );
  },
  deleteMovie: (req, res) => {
    res.json({ test: "Yes" });
  }
};
