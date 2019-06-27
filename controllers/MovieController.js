const Movie = require("../db/models/Movie");

function addDetailsToArray(data) {
  var response = {};
  response.count = data.length;
  response.results = data;
  return response;
}

module.exports = {
  getRandomSix: (req, res) => {
    var skipCount = Math.floor(Math.random() * 1994);
    Movie.find({})
      .skip(skipCount)
      .limit(6)
      .then(m => res.json(addDetailsToArray(m)));
  },
  getById: (req, res) => {
    Movie.find({ id: req.params.id }).then(m => res.json(addDetailsToArray(m)));
  },
  getByTitle: (req, res) => {
    Movie.find({ title: req.params.title }).limit(6).then(m =>
      res.json(addDetailsToArray(m))
    );
  },
  searchByTitle: (req, res) => {
    Movie.find({ title: new RegExp(req.params.title, "ig") }).limit(6).then(m =>
      res.json(addDetailsToArray(m))
    );
  },
  deleteMovie: (req, res) => {
    res.json({ test: "Yes" });
  }
};
