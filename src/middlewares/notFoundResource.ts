import { Request, Response } from 'express';

type NotFoundResource = (req: Request, res: Response) => void;

export const notFoundResource: NotFoundResource = (req, res) => {
  res.status(404).json({ status: 404, message: 'Ops! Nada encontrado.' });
};
