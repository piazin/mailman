import express from 'express';
import { use } from './use';
const app = express();

use(app);

export { app };
