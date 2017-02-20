//Dependencies
var request = require("request");
var cheerio = require("cheerio");
var Report = require("../models/Report");
var Note = require("../models/Note");


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
  app.post("/news/save", function(req, response){
    //I'm having trouble tryng to update the 'saved' boolean on click of the save button.
    //It's returing a refence error saying that 'saved' is not defined. It is defined in the model.
    //I don't understand the problem here.
    Report.findOneAndUpdate({"_id": req.body.id}, {"saved": !saved }, function(err, doc){
      if(err){
        console.log(err);
        response.send(err)
      }else{
        console.log(Report);
        console.log(doc);
      }
    })
  })
};
