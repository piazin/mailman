import { Request, Response } from 'express';
import { SendEmailUseCase } from './SendEmailUseCase';
import { validateRequestBody } from '../../validators/validateRequestBody';
import { senderValidator } from '../../validators/senderValidator';

export class SendEmailController {
  constructor(private sendEmailUseCase: SendEmailUseCase) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    const { bodyError, value: body } = validateRequestBody(req.body);
    if (bodyError) return res.status(400).json({ statusCode: 400, message: bodyError });

    const { senderError, value: sender } = senderValidator(req.params as unknown as string);
    if (senderError) return res.status(400).json({ statusCode: 400, message: senderError });

    var sendEmailResult = await this.sendEmailUseCase.execute({
      to: sender as string,
      from: 'lucas@lucasouza.tech',
      email: body?.email,
      name: body?.name,
      message: body?.message,
    });

    if (sendEmailResult.isLeft()) {
      return res.status(sendEmailResult.value.statusCode).json({
        status: sendEmailResult.value.statusCode,
        message: sendEmailResult.value.message,
      });
    }

    return body?._redirect
      ? res.redirect(body._redirect)
      : res.status(200).json({ statusCode: 200, message: 'Email enviado com sucesso' });
  }
}
