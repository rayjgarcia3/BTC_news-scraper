//Dependencies
var request = require("request");
var cheerio = require("cheerio");

module.exports = function(app){
  //Initial app action - send the homepage
  app.get("/", function(request, response){
    response.send(index.html);
  });
  app.get("/news", function(request, response){
    request("http://www.cointelegraph.com/", function(error, response, html){
      var $ = cheerio.load(html);
    })
  })
}
