import nodemailer from 'nodemailer';
import { IMailProvider, IMessage, Response } from '../IMailProvider';
import { transportConfig } from '../../config/nodemailer.config';
import { left, right } from '../../errors/either';
import { ErrorToSendEmail } from '../../errors/baseError';

export class NodemailerProvider implements IMailProvider {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(transportConfig);
  }

  async sendMail(message: IMessage): Promise<Response> {
    await this.transporter.sendMail(
      {
        to: message.to,
        from: message.from,
        subject: message.subject,
        html: message.body,
      },
      (err) => {
        if (err)
          return left(new ErrorToSendEmail('falha ao enviar o email', 500));
      }
    );

    return right('Sucesso ao enviar o email');
  }
}
