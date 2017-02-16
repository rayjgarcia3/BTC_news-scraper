/* BTC_news-scraper
*=======NHJ======== */

//Dependencies:
var express = require("express");

var bodyParser = require("body-parser");


//Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;

//Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];


//Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static("public"));

//Database configuration for Mongoose
/*  ==== PRODUCTION  ====
mongoose.connect("mongodb://heroku_61r5kd5m:c63jhjs6ndeh07q6igunp3fk0p@ds153689.mlab.com:53689/heroku_61r5kd5m
");
======  */
mongoose.connect("mongodb://localhost/btc-news");
var db = mongoose.connection;

db.once("open", function(){
  console.log("Mongoose connected and ready to rock.")
});


require("./app/routes/control.js")(app);

app.listen(PORT, function(){
  console.log("App running on PORT: ", PORT);
})
