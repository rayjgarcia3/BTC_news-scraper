//Dependencies
var request = require("request");
var cheerio = require("cheerio");
var Report = require("../models/report")

module.exports = function(app){
  //Initial app action - send the homepage
  app.get("/", function(req, response){
    var start = {}
    response.render("index", start);
  });
  app.get("/scrape", function(req, response){
    request("http://www.coindesk.com/", function(error, res, html){
      var $ = cheerio.load(html);
      console.log($);
      $("div.post-info h3 a").each(function(i, element){
        var result = {};
        result.title = $(this).attr("title");
        result.link = $(this).attr("href");

      var report = new Report(result);

      report.save(function(error, doc){
        if (error){
          console.log(error);
        }else{
          console.log(doc);
        }
      });
    })
  })
  response.redirect("/news");
});
  app.get("/news", function(req, response){
    Report.find({}, function(error, doc){
      var hbsObject = {
        reports : doc
      };
      if (error){
        console.log(error);
      }else{
        response.render("news", hbsObject);
        console.log(doc);
      }
    }).limit(10);
  });
};
