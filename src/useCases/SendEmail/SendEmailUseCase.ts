import { createTransport, SendMailOptions } from 'nodemailer';
import { transportConfig } from '../../config/nodemailer.config';
import { ISendEmailDTO } from './SendEmailDTO';

export class SendEmailUseCase {
  execute(data: ISendEmailDTO) {
    const transport = createTransport(transportConfig);

    const mailConfig: SendMailOptions = {
      from: {
        name: 'Team MailMain',
        address: 'ls4803326@gmail.com',
      },
      to: data.to,
    };
  }
}
