import { NodemailerProvider } from '../../providers/implementations/NodemailerProvider';
import { SendEmailController } from './SendEmailController';
import { SendEmailUseCase } from './SendEmailUseCase';

const nodemailerProvider = new NodemailerProvider();
const sendEmailUseCase = new SendEmailUseCase(nodemailerProvider);

const sendEmailController = new SendEmailController(sendEmailUseCase);

export { sendEmailController, sendEmailUseCase };
