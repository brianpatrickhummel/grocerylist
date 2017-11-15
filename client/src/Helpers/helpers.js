// Include the Axios library for HTTP requests
var axios = require("axios");

// Spoonacular API key
// var APIKey = "XXXXXXXXX";

// Helper Functions
var helpers = {





  // runQuery: function(term, start, end) {

   
  //   var formattedTerm = term.trim();
  //   var formattedStart = start.trim() + "0101";
  //   var formattedEnd = end.trim() + "1231";



  //   return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
  //     params: {
  //       "api-key": APIKey,
  //       "q": formattedTerm,
  //       "begin_date": formattedStart,
  //       "end_date": formattedEnd
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("Axios Results", results.data.response);
  //     return results.data.response;
  //   });
  // },

  // getSaved: function() {
  //   return axios.get("/api/saved")
  //     .then(function(results) {
  //       console.log("axios results", results);
  //       return results;
  //     });
  // },

  // postSaved: function(title, date, url) {
  //   var newArticle = { title: title, date: date, url: url };
  //   return axios.post("/api/saved", newArticle)
  //     .then(function(response) {
  //       console.log("axios results", response.data._id);
  //       return response.data._id;
  //     });
  // },

  // deleteSaved: function(title, data, url) {
  //   return axios.delete("/api/saved", {
  //     params: {
  //       "title": title,
  //       "data": data,
  //       "url": url
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("axios results", results);
  //     return results;
  //   });
  // }






};


// We export the helpers function
module.exports = helpers;
