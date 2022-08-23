import { Request, Response } from "express";

export const IndexController = (req: Request, res: Response): Response => {
  return res.status(200).json({ success: true, message: "Hey" });
};
