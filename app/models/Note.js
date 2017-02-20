var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
    required: true
  }
});

var Note = mongoose.model("Note", ReportSchema);

module.exports = Note;
