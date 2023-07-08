const express = require('express');
const { getRandomString, getHash, validateData } = require('../commonfn')
const { db1 } = require('../db')

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/n1');

app.get('/', async (req, res) => {
  res.render('index',{hostname:req.hostname});
});

module.exports = app;