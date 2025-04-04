import express from "express";
import dotenv from "dotenv";

dotenv.config();

function startServer(){
    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello World!');
      });
    
    return app;
}

export default startServer;