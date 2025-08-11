// const express = require("express");
// const serverless = require("serverless-http");


// const api = express();

// // const router = Router();
// // router.get("/hello", (req, res) => res.send("Hello World!"));

// api.use("/", router);

// export const handler = serverless(api);


// https://docs.netlify.com/build/frameworks/framework-setup-guides/express/
import express, { Router } from "express";
import serverless from "serverless-http";
// const { router } = require('../../src/router');

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

export const handler = serverless(api);
