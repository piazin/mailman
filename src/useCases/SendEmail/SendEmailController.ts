import { Request, Response } from 'express';
import { SendEmailUseCase } from './SendEmailUseCase';

export class SendEmailController {
  constructor(private sendEmailUseCase: SendEmailUseCase) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    const { name, email, message } = req.body;
    const { sender } = req.params;

    var result = await this.sendEmailUseCase.execute({
      to: 'ls4803326@gmail.com',
      from: sender,
      email: email,
      name: name,
      body: message,
    });

    if (result.isLeft()) {
      return res.status(result.value.statusCode).json({
        status: result.value.statusCode,
        message: result.value.message,
      });
    }

    return res.status(200).json(result.value);
  }
}
