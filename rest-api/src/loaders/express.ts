import { json, Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { config } from "../config";
import { routes } from "../routes";
import { handleError, handleNotFound } from "../utils/default-handlers";

const expressLoader = ({ app }: { app: Application }) => {
  app.use(cors());

  app.use(json());

  app.use(config.api.prefix, routes());

  app.use(handleNotFound);
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    handleError(err, req, res, next);
  });
};

export { expressLoader };
