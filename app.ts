import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Settings from "./settings";
import Middlewares from "./middlewares";
import Routers from "./routers";

dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || "";

let app: Express = express();

app = Settings(app);
app = Middlewares(app);
app = Routers(app);

// Connecting to Database
mongoose
  .connect(MONGODB_URI)
  .then((db) => console.log("DataBase connection success."))
  .catch((err) => console.log("DataBase connection failed.", err.toString()));

// Running server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
