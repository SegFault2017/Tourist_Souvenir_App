import { Router } from "express";
import GeneralController from "./controller";
const router = Router();

router.get("/", GeneralController.home);

export default router;