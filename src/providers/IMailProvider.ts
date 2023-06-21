import { Either } from '../errors/either';
import { ErrorToSendEmail } from '../errors/baseError';

export interface IMessage {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export type Response = Either<ErrorToSendEmail, string>;

export interface IMailProvider<T, M> {
  transporter: T;
  sendMail(message: M): Promise<Response>;
}

export interface MailProvider {
  sendMail(message: IMessage): Promise<Response>;
}
