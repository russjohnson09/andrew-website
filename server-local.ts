// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');


import express from 'express';

// strict type
// a type-only import when 'verbatimModuleSyntax'
import type { Request, Response } from 'express'
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors())
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.use(cors());

// I just use ts-node and new "node --watch -r ts-node/register app.ts"



// const { router } = require('./src/router');


// app.use(bodyParser.json());

// app.use('/', router);

// app.listen(3000, () => console.log('Local app listening on port 3000!'));
