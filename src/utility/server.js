import express from "express";
import cors from "cors";

function startServer() {
  const app = express();

  // Middleware (simplified for modern Express)
  app.use(express.json()); // Replaces bodyParser.json()
  app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()
  app.use(cors());

  // Route handler
  app.get("/", (req, res) => {
    res.send(`<h1>Hello from Express!</h1>`);
    console.log("GET / received");
  });

  return app;
}

export default startServer;