var movie = require("./movie");
var threeFavouriteMovies = ["The Fall", "The Life Aquatic", "The Sandlot"];
threeFavouriteMovies.forEach(function(film) {
	console.log("from app.js");
	getMovie(film);
});