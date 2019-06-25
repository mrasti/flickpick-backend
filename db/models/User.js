const mongoose = require("../connection");
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  favorites: [
    {
      ref: "Movie",
      type: Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model("User", User);
