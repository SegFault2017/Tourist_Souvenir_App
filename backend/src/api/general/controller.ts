import { NextFunction, Request, Response } from "express";
import autoBind from "auto-bind";


class GeneralController{
	constructor() {
		autoBind(this);
	}

	async home(req: Request, res: Response, next: NextFunction): Promise<void>{
		try {
			res.json("Hello World");
		} catch (error) {
			next(error);
		}
	}
}

export default new GeneralController();