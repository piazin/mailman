import { Either } from '../errors/either';
import { ErrorToSendEmail } from '../errors/baseError';

export interface IMessage {
  to: string;
  from: string;
  subject: string;
  body: string;
}

export type Response = Either<ErrorToSendEmail, string>;

export interface IMailProvider {
  sendMail(message: IMessage): Promise<Response>;
}
