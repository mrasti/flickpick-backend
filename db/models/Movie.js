
const mongoose = require('../connection')
const Schema = mongoose.Schema

const Movie = new Schema({
    id: Number,
    title: String,
    overview: String,
    popularity: Number,
    adult: Boolean,
    original_language: String,
    posterImage: String,
    backdropImage: String,
    videoExists: Boolean,
    videoKey: String,
    vote_average: Number,
    release_date: Date,
    genre_ids: Array,
    genres: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    }]
})

module.exports = mongoose.model('Movie', Movie)
