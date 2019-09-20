var expect = require('chai').expect;
var movies = require('./index');

describe('movies-names',function(){
    describe('all',function(){
        it('should be an array of objects',function(){
            expect(movies.all).to.satisfy(isArrayOfObjects);

            function isArrayOfObjects(array){
                return array.every(function(item){
                    return typeof item === 'object';
                });
            }
        });

        it('should get movie by title',function(){
            var movie = movies.getMovieByName('Gandhi');
            expect(movie[0].title).to.equal('Gandhi');
        });

        describe('all',function(){
            it('should not be `0` in length or undefined',function(){
                expect(movies.all).to.not.equal(0 || undefined);
            });
        });

        describe('random',function(){
            it('should not be null or empty',function(){
                expect(movies.random()).to.not.equal({});
            });
        });


        describe('random',function(){
            it('should return a random item from movies.all',function (){
                var randomItem = movies.random();
                expect(movies.all).to.include(randomItem);
            });
        });

        describe('getMovieByName()',function(){
            it('should log `The Movie youre looking for is not found` if movie is not found',function(){
                var movieNotInTheArray = movies.getMovieByName('');
                console.log();
                expect(movies.getMovieByName('')).to.equal(movieNotInTheArray);
            });
        });

        describe('getMovieByName(`Gandhi`)',function(){
            it('should not be empty',function(){
                var movieNotInTheArray = movies.getMovieByName('Gandhi');
                console.log();
                expect(movies.getMovieByName('Gandhi')).to.not.equal({});
            });
        });
    });
});