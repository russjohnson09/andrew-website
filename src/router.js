const express = require('express');
const path = require('path');

const router = express.Router();

const {User } = require('./models');


const started = new Date();

// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write('<h1>Hello from 123.js!</h1>');
//   res.end();
// });

router.get('/test', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

// TODO add some version maybe the git commit?
router.get('/status', (req, res) => {
  res.json({
    started,
  })
});

router.get('/user-add', async (req, res) => {
  const user = new User();
  await user.save();
  const users = await User.findAll();
  res.json(users);
});

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});


router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));
router.use(express.static(path.join(__dirname, '../react-app/build')));



module.exports = { router }
