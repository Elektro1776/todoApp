const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
// OUR FILES GO HERE
const homeRouter = require('./src/routes/home');
const apiRouter = require('./src/routes/apiRoutes');

const app = express();
const port = 3000;
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
// use our home Router middleware when ever we have a
// Client Get Request to the '/' aka home route.
// We dont need to pass a path here as our router will
// figure out what to do for us based on the Client request
app.use(homeRouter);
app.use(apiRouter);

app.listen(port, () => {
  console.log('Server listening on port ', port);
})
// module.exports = config;
