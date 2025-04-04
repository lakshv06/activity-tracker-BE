import startServer from "./src/utility/server.js";
import dotenv from "dotenv";

// Configure environment variables FIRST
dotenv.config();

// Initialize server
const app = startServer();
const port = process.env.PORT || 8000; // Will use 3000 from .env

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});