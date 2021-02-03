import {  Router } from "express";
import LogEntryController from "./controller";
const router = Router();

router.get("/", LogEntryController.getLog);
router.post("/add", LogEntryController.addLog);

export default router;