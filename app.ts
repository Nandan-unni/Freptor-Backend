import express, { Express } from "express";
import dotenv from "dotenv";
import DocsRouter from "./routers/docs.router";

dotenv.config();

const port = process.env.PORT || 8000;

const app: Express = express();

app.use("/", DocsRouter);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
