const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(dirName => dirName.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result2 = movies.filter(movie => movie.director == director);
    console.log("EXERCICE 2 ->", result2);
    return result2;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let result3 = movies.filter(movie => movie.director == director);
  let average = result3.reduce((total, next) => total + next.score, 0) / result3.length;
  console.log("EXERCICE 3 ->" + (+average.toFixed(2)));
  return (+average.toFixed(2));
}

function moviesAverage(movies){
  let result = movies.map(movie=> movie.score).filter(score => score !== '');
  let rate = result.reduce((total, next) => (total + next) / result.length);
  return rate;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titles =  movies.map(item => item.title);
  let result4 = titles.sort();
  console.log("EXERCICE 4 ->" + result4);
  return result4.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  
  let result5 = [...movies].sort((a, b) => {
    //If the year is not the same ordered by year
    if (a.year !== b.year) return a.year - b.year;
    //If the 1st title letter comes first in the alphabet, movi it up
    if (a.title > b.title) return 1;
    //Otherwise movie it down
    if (a.title < b.title) return -1;
  });

  console.log("EXERCICE 5 ->" + result5);
  return result5;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, cat) {
  let movieCat = movies.filter(movie => movie.genre.includes(cat));
  let result6 = moviesAverage(movieCat);
  console.log("EXERCICE 6 ->" + result6);
  return result6;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let result7 = movies.map( movie => {
  let duration = movie.duration.split("");
  let hours = parseInt(movie.duration.split(" ")[0]);
  let minutes = parseInt(movie.duration.split(" ")[1]);
  let total;

    if(duration[0] == 0){
      total = minutes;
      movie = {... movie};
      movie.duration = total;
      return movie;

    } else if (duration.length == 2){
      total = hours * 60;
      movie = {... movie};
      movie.duration = total;
      return movie;

    } else {
      total = (hours * 60) + (minutes);
      movie = {... movie};
      movie.duration = total;
      return movie;
    }
  });
  console.log("EXERCICE 7 ->" + result7);
  return result7;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, years) {
  let bestMovieYear = movies.filter(el => el.year == years).reduce((a, b) => {
    if (a.score > b.score) return a;
    else return b;
  });
  let bestMovie = []
  let result8 = bestMovie.push(bestMovieYear);


  console.log("EXERCICE 8 ->" + result8);
  return result8;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
