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
