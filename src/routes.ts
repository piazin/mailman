import { Router } from 'express';
import { sendEmailController } from './useCases/SendEmail';

const router = Router();

router.get('/', (req, res) => res.json('Hello from Mailman!'));

router.post('/send/:sender', (req, res) => {
  return sendEmailController.handle(req, res);
});

export { router };
