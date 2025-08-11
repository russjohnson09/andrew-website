


import express from 'express';

import { User } from '../models'


const started = new Date();

const router = express.Router();

router.get('/test', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Express.js!</h1>');
    res.end();
});

router.get('/hello', (req, res) => {
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


export {
    router
}
