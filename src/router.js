const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from 123.js!</h1>');
  res.end();
});

router.get('/test', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});



router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));
router.use(express.static(path.join(__dirname, '../react-app/build')));



module.exports = { router }
