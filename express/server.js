'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const {router} = require('../src/router')


// https://docs.netlify.com/api-and-cli-guides/cli-guides/manage-functions/
app.use(bodyParser.json());


app.use('/.netlify/functions', router);  // path must route to lambda
// app.use('/.netlify/functions/server', router);  // path must route to lambda

// app.use('/', router);  // path must route to lambda
// 

// for building the react app
// cd my-app
// npm run build
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../react-app/build/.html')));



module.exports = app;
module.exports.handler = serverless(app);
