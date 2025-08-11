


Deploying changes


Make sure to run `npm run build` this will include any react changes.

After `npm run build` commit any changes in react-app/build.


Any records inserted into database.sqlite will be preserved if committed. Deploying will reset any records added while the server was active.

This is okay if the primary use for this server is testing.



# Netlify
https://app.netlify.com/projects/andrew-api/configuration/functions#content













This is a problem with the Netlify CLI, not with your application.


Step 1: Install Netlify CLI

npm install netlify-cli -g

Step 2: Start local development server in repo directory

netlify dev


https://github.com/netlify/cli/releases

npm install -g netlify-cli@22

netlify dev


npx netlify init


npm install -g npm-check-updates


ncu -i

https://github.com/WiseLibs/better-sqlite3/issues/1352
https://answers.netlify.com/t/better-sqlite3-no-longer-installing/142578/2


Project Name:  andrew-api
Project Url:   https://andrew-api.netlify.app
Project Repo:  https://github.com/russjohnson09/andrew-website
Project Id:    84863460-86d4-4812-84fc-5f5ef1e3c11f
Admin URL:  https://app.netlify.com/projects/andrew-api


npx create-next-app@latest



npx create-react-app react-app





# Express.js on Netlify Example

[![Netlify
Status](https://api.netlify.com/api/v1/badges/9aaef7de-1e5d-4fda-bc39-faa10a68b35b/deploy-status)](https://app.netlify.com/sites/netlify-express/deploys)

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/neverendingqs/netlify-express)

An example of how to host an Express.js app on Netlify using
[serverless-http](https://github.com/dougmoscrop/serverless-http). See
[express/server.js](express/server.js) for details, or check it out at
https://netlify-express.netlify.com/!

[index.html](index.html) simply loads html from the Express.js app using
`<object>`, and the app is hosted at `/.netlify/functions/server`. Examples of
how to access the Express.js endpoints:

```sh
curl https://netlify-express.netlify.com/.netlify/functions/server
curl https://netlify-express.netlify.com/.netlify/functions/server/another
curl --header "Content-Type: application/json" --request POST --data '{"json":"POST"}' https://netlify-express.netlify.com/.netlify/functions/server
```
