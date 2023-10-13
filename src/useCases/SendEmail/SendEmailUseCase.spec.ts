import { vi } from 'vitest';
import { IMessage } from '../../types';
import { SendEmailUseCase } from './SendEmailUseCase';
import { MailProvider } from '../../providers/IMailProvider';

import { left } from '../../errors/either';
import { ErrorToSendEmail } from '../../errors/baseError';

describe('SendEmailUseCase', () => {
  let mailProvider: MailProvider<IMessage>;

  beforeEach(() => {
    mailProvider = {
      sendMail: vi.fn(),
    };
  });

  it('should return an error if the email address is not authorized', async () => {
    const useCase = new SendEmailUseCase(mailProvider);
    const response = await useCase.execute({
      to: 'unauthorized@example.com',
      from: 'test@example.com',
      name: 'John',
      email: 'john@example.com',
      message: 'Test Message',
    });

    expect(response).toEqual(left(new ErrorToSendEmail('Email não autorizado', 403)));
  });
});
