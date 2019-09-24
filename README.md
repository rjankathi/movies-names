[![travis build](https://img.shields.io/travis/rjankathi/movies-names.svg?style=flat-square)](https://travis-ci.com/rjankathi/movies-names)
[![codecov](https://codecov.io/gh/rjankathi/movies-names/branch/master/graph/badge.svg)](https://codecov.io/gh/rjankathi/movies-names/)
[![version](https://img.shields.io/npm/v/starwars-names.svg?style=flat-square)](http://npm.im/starwars-names)
[![downloads](https://img.shields.io/npm/dm/movies-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=movies-names&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/movies-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

# Movies Names 
  Contains a list of 1900-2018 hollywood movies from Wikipedia in convenient form: an array of objects, each representing a movie, with a title string, year integer, a cast array and a genres array -- each representing the text content of those respective columns in the Wikipedia tables"
  
## Installation
Use npm to install movies-names package
```npm
npm install movies-names
```

## Usage
```javascript
var moviesNames = require('movies-names');
moviesNames.all # returns all movies
moviesNames.random() # returns a random movie name
moviesName.random(2) # returns specified number of random movies
moviesNames.getmovieName('The Dark Knight') # returns specified movie 

```

## Purpose
This package came out of my curiosity to learn how to develop and deploy/publish an npm package. Using `Travis CI`, `semantic-release`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
