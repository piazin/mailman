import { ResendProvider } from '../../providers/implementations/ResendProvider';
import { SendEmailController } from './SendEmailController';
import { SendEmailUseCase } from './SendEmailUseCase';

const resendProvider = new ResendProvider();
const sendEmailUseCase = new SendEmailUseCase(resendProvider);

const sendEmailController = new SendEmailController(sendEmailUseCase);

export { sendEmailController, sendEmailUseCase };
