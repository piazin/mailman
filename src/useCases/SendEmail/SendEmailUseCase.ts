import { IMessage } from '../../types';
import { left } from '../../errors/either';
import { ISendEmailDTO } from './SendEmailDTO';
import { ErrorToSendEmail } from '../../errors/baseError';
import { MailProvider, Response } from '../../providers/IMailProvider';
import { replaceTemplateVariables } from '../../helpers/replaceTemplateVariables';
import { availableTemplates, getEmailTemplate } from '../../templates/getEmailTemplate';

export class SendEmailUseCase {
  constructor(private mailProvider: MailProvider<IMessage>) {}

  async execute(data: ISendEmailDTO): Promise<Response> {
    if (data.to !== 'ls4803326@gmail.com') {
      return left(new ErrorToSendEmail('Email não autorizado', 403));
    }

    const emailTemplate = await getEmailTemplate(availableTemplates.Default);
    const emailContent = replaceTemplateVariables(emailTemplate as string, {
      name: data.name as string,
      email: data.email as string,
      message: data.message as string,
    });

    const mailOptions = {
      to: [data.to],
      from: `Mailman <${data.from}>`,
      subject: 'Novo email recebido do seu formulario Mailman',
      html: emailContent,
    };

    return await this.mailProvider.sendMail(mailOptions);
  }
}
