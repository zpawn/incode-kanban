import { Request, Response, NextFunction } from "express";
import { Logger } from "../loaders/logger";

const handleNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(404);
  res.send(`Route not found for: ${req.path}`);
  return next();
};

const handleError = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).json({ error: err.message });
};

export { handleNotFound, handleError };
