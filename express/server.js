'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const {router} = require('../src/router')


// https://docs.netlify.com/api-and-cli-guides/cli-guides/manage-functions/
// app.use(bodyParser.json());


// app.use('/.netlify/functions', router);  // path must route to lambda
// app.use('/.netlify/functions/server', router);  // path must route to lambda

// app.use('/', router);  // path must route to lambda
// 

// for building the react app
// cd my-app
// npm run build
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../react-app/build/.html')));

// https://github.com/neverendingqs/netlify-express/blob/master/express/server.js

// https://answers.netlify.com/t/deploying-express-server-on-netlify-with-lambda-functions/19535
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));


module.exports = app;
module.exports.handler = serverless(app);


