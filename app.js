var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var CORS = require('cors')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(CORS);

var port = process.env.PORT || 4000;
var main = require('./routes/main')(express.Router(), fs);
var quiz = require('./routes/quiz')(express.Router(), fs);
var transe = require('./routes/transe')(express.Router(), fs);

app.set('views', path.join(__dirname, 'views'));
app.set('port', port)
app.set('view engine', 'ejs');


app.use('/main.html', main);
app.use('/main', main);
app.use('/quiz.html', quiz);
app.use('/quiz', quiz);
app.use('/translation.html', transe);
app.use('/transe', transe);

app.listen(3111, ()=>{
  console.log('Server portin on 3111')
})
