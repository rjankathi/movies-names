var uniqueRandomArray = require('unique-random-array');
var movies = require('./movies.json');
var getRandomItem = uniqueRandomArray(movies);

module.exports = {
    all: movies,
    random: random,
    movieByName: movieByName
};

function movieByName(title){
    var movie =  movies.filter((item) => { return title.includes(item.title);});
        if(movie.length == 0 || movie === undefined){
            return `The Movie youre looking for is not found`;
        } else{
            return movie;
        }
}

function random(number){
    if(number === undefined){
    return getRandomItem();
    } else {
        var randomItems = [];
        for(var i=0; i < number ; i++){
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}
