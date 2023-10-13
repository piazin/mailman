import { Resend } from 'resend';
import { IMessage } from '../../types';
import { IMailProvider, Response } from '../IMailProvider';
import { resendConfig } from '../../config/resend.config';

import { left, right } from '../../errors/either';
import { ErrorToSendEmail } from '../../errors/baseError';

export class ResendProvider implements IMailProvider<Resend, IMessage> {
  transporter: Resend;

  constructor() {
    this.transporter = new Resend(resendConfig.key);
  }

  async sendMail(message: IMessage): Promise<Response> {
    try {
      await this.transporter.emails.send(message);
      return right('Sucesso ao enviar o email!');
    } catch (error) {
      console.log('🚀 ~ file: ResendProvider.ts:20 ~ ResendProvider ~ sendMail ~ error:', error);
      return left(new ErrorToSendEmail('Falha ao enviar o email!', 500));
    }
  }
}
