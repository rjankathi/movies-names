var uniqueRandomArray = require('unique-random-array');
var movies = require('./movies.json');
module.exports = {
    all: movies,
    random: uniqueRandomArray(movies)
};