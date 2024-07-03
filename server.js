// Import statement
import express from "express";
import bodyParser from "body-parser";
import { route } from "./server/routes/route.js"
import morgan from "morgan";

// Initialization
const server = express();


// Middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("tiny"))


route(server)
const PORT = process.env.PORT || 3000;



// Listener
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
