const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());


const { router } = require('./src/router');


app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => console.log('Local app listening on port 3000!'));
