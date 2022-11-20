import { Express } from "express";
import DocsRouter from "./docs.router";
import FreelancerRouter from "./freelancer.router";

const Routers = (app: Express) => {
  app.use("/", DocsRouter);
  app.use("/freelancer", FreelancerRouter);
  return app;
};

export default Routers;
