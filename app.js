const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { count } = require('./scripts/count/script.js');
const { split } = require('./scripts/split/script.js');
const { remove } = require('./scripts/remove/script.js');
const { correct } = require('./scripts/correct/script.js');


app.use(express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');


app.post('/countAmountOfEachCharacter', function (req, res) {
	const result = count(req.body.input ? req.body.input : '');
  res.render('count/index',result);
});

app.post('/splitOddAndEven', function (req, res) {
	const result = split(req.body.input ? req.body.input : '');
  res.render('split/index',result);
});

app.post('/removeExclamationMarksFromEnd', function (req, res) {
	const result = remove(req.body.input ? req.body.input : '');
  res.render('remove/index',{newString :result});
});

app.post('/correctMistakes', function (req, res) {
	const result = remove(req.body.input ? req.body.input : '');
  res.render('correct/index',{_newString :result});
});


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/test', function (req, res) {
  res.render('test');
});

app.get('/splitOddAndEven', function (req, res) {
	const result = split(req.query.input ? req.query.input : '');
  res.render('split/index');
});

app.get('/countAmountOfEachCharacter', function (req, res) {
	const result = count(req.query.input ? req.query.input : '');
  res.render('count/index');
});

app.get('/taschenrechner', function (req, res) {
  res.render('taschenrechner/index');
});

app.get('/removeExclamationMarksFromEnd', function (req, res) {
	const result = remove(req.query.input ? req.query.input : '');
  res.render('remove/index');
});

app.get('/correctMistakes', function (req, res) {
	const result = correct(req.query.input ? req.query.input : '');
  res.render('correct/index');
});


app.listen(3000, function() {
  console.log('server ist auch da');
});

