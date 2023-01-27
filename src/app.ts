import express from 'express';
import cors from 'cors';
import { router } from './routes';
const app = express();

app.use(cors());
app.use(express.json()).use(express.urlencoded({ extended: false }));
app.use(router);

export { app };
