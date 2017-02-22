var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes:
    [{type: Schema.Types.ObjectId,
    ref: "Note"}]

});

var Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
