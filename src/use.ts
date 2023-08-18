import cors from 'cors';
import helmet from 'helmet';
import { router } from './routes';
import express, { Express } from 'express';
import { notFoundResource, errorRequestHandler } from './middlewares';

export const use = async (app: Express) => {
  app.use(helmet(), cors(), express.json()).use(express.urlencoded({ extended: false }));
  app.use(router);
  app.use(errorRequestHandler);
  app.use(notFoundResource);
};
