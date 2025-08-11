import express from 'express';

// netlify's entrypoint is netlify/functions/api.ts
// This is for local testing.
// Both have a shared entry point of router
import { router } from './router'

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// functions includes this as well.
app.use(express.static('react-app/build/'));
