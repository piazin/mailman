import nodemailer, { Transporter } from 'nodemailer';
import { IMailProvider, Response } from '../IMailProvider';
import { transportConfig } from '../../config/nodemailer.config';
import { left, right } from '../../errors/either';
import { ErrorToSendEmail } from '../../errors/baseError';

interface IMessage {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export class NodemailerProvider implements IMailProvider<Transporter, IMessage> {
  transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(transportConfig);
  }

  async sendMail(message: IMessage): Promise<Response> {
    try {
      await this.transporter.sendMail(message);
      return right('Sucesso ao enviar email!');
    } catch (error) {
      return left(new ErrorToSendEmail('falha ao enviar o email!', 500));
    }
  }
}
