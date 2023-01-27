import express from 'express';
import { router } from './routes';
const app = express();

app.use(express.json()).use(express.urlencoded({ extended: false }));
app.use(router);

export { app };
