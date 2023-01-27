import { Router } from 'express';
import { sendEmailController } from './useCases/SendEmail';

const router = Router();

router.post('/send/:sender', (req, res) => {
  return sendEmailController.handle(req, res);
});

export { router };
