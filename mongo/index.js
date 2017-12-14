var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/a1');
mongoose.Promise = global.Promise;

var WordsSchema = mongoose.Schema({
  word : {type : String, required : true, unique : true},
  change : {type : String , required : true}
});

Words = mongoose.model("words", WordsSchema);


exports.Words = Words;
