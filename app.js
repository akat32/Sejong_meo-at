var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var CORS = require('cors')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(CORS);
require('./mongo');

var port = process.env.PORT || 4000;
var main = require('./routes/main')(express.Router(), fs);
var quiz = require('./routes/quiz')(express.Router(), fs);
var transe = require('./routes/transe')(express.Router(), fs);
var word = require('./routes/word')(express.Router(), fs,Words);
app.set('views', path.join(__dirname, 'views'));
app.set('port', port)
app.set('view engine', 'ejs');

app.use('/main', main);
app.use('/quiz', quiz);
app.use('/transe', transe);
app.use('/word', word);
app.get('/',(req,res)=>{
  res.redirect('/main');
})
.post('/word/change', async(req,res)=>{
  String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
  }
  var result = await Words.find().sort({word : 1});
  var str = req.body.str;
  var ss;
  for(i=0;;i++){
    if(!result[i]) break;
    ss = str.replaceAll(result[i].word,result[i].change);
  }
  console.log(ss);
  res.status(200).send(ss);
})

app.listen(3111, ()=>{
  console.log('Server portin on 3111')
})
