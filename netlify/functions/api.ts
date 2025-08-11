import express, { Router } from "express";
import serverless from "serverless-http";

const { router } = require('../../src/router');

const api = express();

// const router = Router();
// router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/", router);

export const handler = serverless(api);
