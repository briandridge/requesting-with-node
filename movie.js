var request = require('request');

var getMovie = function(film) {
	var omdb = request("http://www.omdbapi.com/?t="+film, function(err, res, body) {
	var result = JSON.parse(body);
	console.log("from movie.js");
	console.log(result.Title);
	});	
};

module.exports = getMovie;







// 31 lines (23 sloc)  940 Bytes
// //Optional: take in zipcode as argument instead of hardcoding
// var zipcode = process.argv.slice(2)[0];

// //Require apiKey
// var env = require("./env.js");

// //Require the request library
// var request = require("request");

// //The API URL we are hitting, with our API Key
// var apiUrl ="http://api.wunderground.com/api/"+env.wuApiKey;

// //The zipcode we are searching for weather for
// var url = apiUrl + "/geolookup/q/"+zipcode+".json";

// //The actual request sending
// request(url, function(err,res,body){
//   //Get our location from a zip code lookup
//   var location = JSON.parse(body).location.requesturl;
  
//   //Get our conditions from that location
//   var url = apiUrl + "/conditions/q/"+location+".json";
//   request(url, function(err,res,body){
//     //Get observation
//     var observation = JSON.parse(body).current_observation
    
//     //Print it out
//     console.log("The weather in", observation.display_location.full, "is", observation.weather)
//   })
// })