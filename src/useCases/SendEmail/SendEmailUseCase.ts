import { left } from '../../errors/either';
import { ISendEmailDTO } from './SendEmailDTO';
import { ErrorToSendEmail } from '../../errors/baseError';
import { MailProvider, Response } from '../../providers/IMailProvider';

export class SendEmailUseCase {
  constructor(private mailProvider: MailProvider) {}

  async execute(data: ISendEmailDTO): Promise<Response> {
    if (data.from !== 'lucas@lucasouza.tech') {
      return left(new ErrorToSendEmail('Email não autorizado', 403));
    }

    if (!data.body || !data.email) {
      return left(new ErrorToSendEmail('Por favor, preecha todos os campos.', 400));
    }

    return await this.mailProvider.sendMail({
      to: data.to,
      from: data.from,
      subject: 'Equipe MailMain',
      html: `
        <p>name: ${data.name}</p>
        <hr/>
        <p>email: ${data.email}</p>
        <hr/>
        <p>message: \n${data.body}</p>
        <hr/>
        `,
    });
  }
}
