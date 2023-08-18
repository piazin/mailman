import { Request, Response, NextFunction } from 'express';

type ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => void;

export const errorRequestHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(400).json({ statusCode: 400, message: err.message });
  }

  if (err) {
    return res.status(500).json({ statusCode: 500, message: 'Internal server error' });
  }

  next();
};
