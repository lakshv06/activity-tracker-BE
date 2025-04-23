import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import getLoginSessionRoute from "./routes/getLoginSessionRoute.js"
import createUserRoute from "./routes/createUser.js"
import getSignInRoute from "./routes/getSignInRoute.js"

function startServer() {
  const app = express();

  // Middleware (simplified for modern Express)
  app.use(bodyParser.json()); // Replaces bodyParser.json()
  app.use(bodyParser.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()
  app.use(cors());

  // Route handler
  app.get("/", (req, res) => {
    res.send(`<h1>Hello from Express!</h1>`);
    console.log("GET for route / received");
  });

  app.use('/sign_up', createUserRoute);

  app.use('/get_login_session', getLoginSessionRoute);

  app.use('/sign_in', getSignInRoute);

//   app.use('/sign_out', getSignOutRoute);
  return app;
}

export default startServer;