
require('./connection');
const Movie = require('./models/Movie');

const fetch = require("node-fetch");
let baseURL1 = 'https://api.themoviedb.org/3/movie/'
let baseURL2 = '/videos?api_key=c65da7dbfcff975db5e41f2ecd673d98&'

let apiCallCounter = 0;

Movie.find({}).then(moviesArray => {
    readVideos(moviesArray, 0);
});

function readVideos(arr, index){
    if(!arr[index]){
        console.log('done');
        return;
    }

    fetch(baseURL1 + arr[index].id + baseURL2)
    .then(res => res.json())
    .then(data => {
        apiCallCounter++;
        let delay = 0;
        if(apiCallCounter%35 === 0){
            delay = 10000;
        }

        if(data && data.results && data.results.length>0){
            arr[index].videoKey = data.results[0].key;
            arr[index].videoExists = true;
            arr[index].save().then(m => {
                console.log("Video for movie " , index, " done");
                setTimeout(function(){
                    readVideos(arr, index+1);
                }, delay);
            });
        }else{
            console.log("Video for movie " , index, " not found");
            setTimeout(function(){
                readVideos(arr, index+1);
            }, delay);
        }
    });
}

