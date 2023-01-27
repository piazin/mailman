import { left } from '../../errors/either';
import { ISendEmailDTO } from './SendEmailDTO';
import { ErrorToSendEmail } from '../../errors/baseError';
import { IMailProvider, Response } from '../../providers/IMailProvider';

export class SendEmailUseCase {
  constructor(private mailProvider: IMailProvider) {}

  async execute(data: ISendEmailDTO): Promise<Response> {
    if (data.to !== 'ls4803326@gmail.com') {
      return left(new ErrorToSendEmail('Email não autorizado', 403));
    }

    if (!data.body) {
      return left(
        new ErrorToSendEmail('Por favor, preecha todos os campos.', 400)
      );
    }

    return await this.mailProvider.sendMail({
      to: data.to,
      from: 'ls4803326@gmail.com',
      subject: 'Equipe MailMain',
      body: `
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
