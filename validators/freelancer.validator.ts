import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import { validatorMiddleware } from "../middlewares";

const CreateFreelancer = (req: Request, res: Response, next: NextFunction) => {
  return validatorMiddleware(
    req,
    res,
    next,
    Joi.object({
      username: Joi.string().required(),
      name: Joi.string().required(),
      role: Joi.string().required(),
      email: Joi.string().required(),
      overdue: Joi.number(),
      currency: Joi.string(),
    })
  );
};

const ReadFreelancer = (req: Request, res: Response, next: NextFunction) => {
  return validatorMiddleware(req, res, next, Joi.object({ fid: Joi.string() }));
};

const FreelancerValidator = {
  create: CreateFreelancer,
  read: ReadFreelancer,
};
export default FreelancerValidator;
