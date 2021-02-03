import { NextFunction, Request, Response } from "express";

export function notFound(req: Request, res:Response, next: NextFunction): void {
	const err = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(err);
}

export function errHandler (error:Error, req:Request, res:Response, next:NextFunction):void {
	const statusCode = (res.statusCode === 200) ? 500 : res.statusCode;
	res.status(statusCode);
	try {
		res.json({
			message: error.message,
			stack: error.stack,
		});
	} catch (error) {
		console.log(error);
	}
	
}