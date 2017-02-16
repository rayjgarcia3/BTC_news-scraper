var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
});

var Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
