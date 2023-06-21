import cors from 'cors';
import { router } from './routes';
import express, { Express } from 'express';

export const use = async (app: Express) => {
  app.use(cors(), express.json()).use(express.urlencoded({ extended: false }));
  app.use('/api/', router);
};
