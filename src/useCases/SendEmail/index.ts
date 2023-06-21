import { SendEmailUseCase } from './SendEmailUseCase';
import { SendEmailController } from './SendEmailController';
import { ResendProvider } from '../../providers/implementations/ResendProvider';

const resendProvider = new ResendProvider();
const sendEmailUseCase = new SendEmailUseCase(resendProvider);

const sendEmailController = new SendEmailController(sendEmailUseCase);

export { sendEmailController, sendEmailUseCase };
