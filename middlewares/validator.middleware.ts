import Joi from "joi";
import { NextFunction, Request, Response } from "express";

const validatorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: Joi.ObjectSchema
): void | Response => {
  let validation = schema.validate(req.body);
  if (validation.error)
    return res.status(400).json({
      success: false,
      message: validation.error.message.split('"').join("'"),
    });
  return next();
};

export default validatorMiddleware;
