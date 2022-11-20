import { Router } from "express";
import FreelancerController from "../controllers/freelancer.controller";
import FreelancerValidator from "../validators/freelancer.validator";

const router = Router();

router
  .post("/", FreelancerValidator.create, FreelancerController.create)
  .get("/:id", FreelancerValidator.read, FreelancerController.read);

export default router;
