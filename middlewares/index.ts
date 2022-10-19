import { Express } from "express";
import corsMiddleware from "./cors.middleware";
import errorMiddleware from "./error.middleware";
import logsMiddleware from "./logs.middleware";

const Middlewares = (app: Express) => {
  app.use(corsMiddleware);
  app.use(errorMiddleware);
  app.use(logsMiddleware);
  return app;
};

export default Middlewares;
