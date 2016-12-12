var movie = require("./movie.js");
var threeFavouriteMovies = ["The Fall", "Frozen", "Frozen"];
threeFavouriteMovies.forEach(function(film) {
	console.log("from app.js");
	console.log(film);
	getMovie(film);

});