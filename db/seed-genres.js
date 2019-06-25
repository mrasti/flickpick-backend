
require('./connection');
const Genre = require('./models/Genre');
const Movie = require('./models/Movie');

const fetch = require("node-fetch");
let baseURL1 = 'https://api.themoviedb.org/3/genre/'
let baseURL2 = '?api_key=c65da7dbfcff975db5e41f2ecd673d98&'

let genreInfo = {};

Genre.deleteMany({}).then(()=>{
    Movie.find({}).then(moviesArray => {
        for(var i=0; i<moviesArray.length; i++){
            for(var j=0; j<moviesArray[i].genre_ids.length; j++){
                let genreId = moviesArray[i].genre_ids[j];
                genreInfo[genreId] = '';
            }
        }
    }).then(() => {
        var keys = Object.keys(genreInfo)
        readSeedGenre(keys, 0)
    });
})

function readSeedGenre(arr, index){
    let genreId = arr[index]
    if(!genreId) {
        updateAllMovies()
        return;
    }

	fetch(baseURL1 + genreId + baseURL2)
	.then(response => {
		return response.json()
	})
	.then(data => {
        Genre.create({
            id: data.id,
            name: data.name
        }).then(genre => {
            genreInfo[genreId] = genre
            readSeedGenre(arr, index+1)
        })
	})
}

function updateAllMovies(){
    Movie.find({}).then(moviesArray => {
        for(var i=0; i<moviesArray.length; i++){
            let movie = moviesArray[i]
            for(var j=0; j<movie.genre_ids.length; j++){
                let genreId = movie.genre_ids[j]
                movie.genres.push(genreInfo[genreId])
            }
            movie.save()
        }
    })
}
