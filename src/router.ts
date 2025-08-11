// const express = require('express');
// const path = require('path');


import cors from 'cors';
import path from 'path';
import express from 'express';

import { User } from './models'

import { router as apiRouter } from './api/router'

class UserMock {

  constructor() {

  }

  static findAll(params?: any) {
    
  }

  save() {

  }
}

// const User = UserMock;


const getRouter = () => {
  const router = express.Router();

  const started = new Date();

  // Allows for the API to be requested from any domain.
  // Cross-domain directly from the browser is disabled by default to
  // prevent malicious attacks.
  router.use(cors());

  router.use('/api',apiRouter);

  router.get('/test', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Express.js!</h1>');
    res.end();
  });

  router.get('/api/hello', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello</h1>');
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

  return router;
}


const getRouterSimple = () => {
    const router = express.Router();
    router.get("/hello", (req, res) => res.send("Hello World!"));
    router.get("/", (req, res) => res.send("Hello World!"));

    return router;
}

const router = getRouter();

export {
  router
}
