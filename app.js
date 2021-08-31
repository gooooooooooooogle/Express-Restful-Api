const express = require('express');
const path = require('path');
const logger = require('morgan');
const routes = require('./routes')

const app = express();

const port = '3003';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(express.static(path.join(__dirname, 'public'))); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

app.listen(port, () => {
  console.log('----------------------listen at ' + port + '----------------------')
})

module.exports = app;
