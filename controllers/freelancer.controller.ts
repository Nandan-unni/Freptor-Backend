import { Request, Response } from "express";
import { FreelancerModel, FreelancerType } from "../models";

const CreateFreelancer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newFreelancer: FreelancerType = new FreelancerModel({
      username: req.body.username,
      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
      overdue: req.body.overdue,
      currency: req.body.currency,
    });
    await newFreelancer.save();
    return res.status(200).json({
      success: true,
      message: "Freelancer created",
      data: newFreelancer,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message, data: error });
  }
};

const ReadFreelancer = (req: Request, res: Response): Response => {
  return res.status(200).json({ success: true });
};

const FreelancerController = {
  create: CreateFreelancer,
  read: ReadFreelancer,
};
export default FreelancerController;
