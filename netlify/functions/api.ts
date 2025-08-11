// const express = require("express");
// const serverless = require("serverless-http");


// const api = express();

// // const router = Router();
// // router.get("/hello", (req, res) => res.send("Hello World!"));

// api.use("/", router);

// export const handler = serverless(api);


// https://docs.netlify.com/build/frameworks/framework-setup-guides/express/
// https://docs.netlify.com/build/functions/get-started/?data-tab=TypeScript
import express, { Router } from "express";
import serverless from "serverless-http";
// const { router } = require('../../src/router');
// import { router } from '../../src/router';

import cors from 'cors';


const api = express();


const router = Router();

router.use(cors());


api.use("/", router);

export const handler = serverless(api);
