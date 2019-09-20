var uniqueRandomArray = require('unique-random-array');
var movies = require('./movies.json');
module.exports = {
    all: movies,
    random: uniqueRandomArray(movies),
    getMovieByName: function (title){
        var movie =  movies.filter((item) => { return title.includes(item.title);});
        if(movie.length == 0 || movie === undefined){
            return `The Movie youre looking for is not found`;
        } else{
            return movie;
        }
    },
};

