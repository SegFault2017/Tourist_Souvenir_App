import { Express } from "express";
import LogRouter from "./../api/logEntry/routes";
import GeneralRouter from "./../api/general/routes";

export default (app: Express): void => {
	app.use("/", GeneralRouter);
	app.use("/api/logs", LogRouter);
};