import { Either } from '../errors/either';
import { ErrorToSendEmail } from '../errors/baseError';

export type Response = Either<ErrorToSendEmail, string>;

export interface IMailProvider<T, M> {
  transporter: T;
  sendMail(message: M): Promise<Response>;
}

export interface MailProvider<M> {
  sendMail(message: M): Promise<Response>;
}
