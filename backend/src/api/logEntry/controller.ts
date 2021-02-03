import { NextFunction, Request, Response } from "express";
import autoBind from "auto-bind";
import LogInfo from "../../models/LogEntry";

//Class for log entry
class LogEntryController{
	constructor() {
		autoBind(this);
	}
	async getLog(req: Request, res: Response, next: NextFunction): Promise<void>{
		try {
			const entries = await LogInfo.find();
			res.json(entries);
		} catch (error) {
			next(error);
		}
	}
	
	async addLog(req: Request, res: Response, next: NextFunction): Promise<void>{
		try {
			if (req.get("X-API-KEY") !== process.env.API_KEY!) {
				res.status(401);
				throw new Error("UnAuthorized");
			}
			const logInfo = new LogInfo(req.body);
			const createdEntry = await logInfo.save();
			res.json(createdEntry);
		} catch (error) {
			if (error.name === "ValidationError") {
				res.status(422);
			}
			next(error);
		}
	}
}

export default new LogEntryController();
