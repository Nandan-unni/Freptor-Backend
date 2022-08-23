import { Router } from "express";
import { IndexController } from "../controllers/docs.controller";

const router = Router();

router.get("/", IndexController);

export default router;
