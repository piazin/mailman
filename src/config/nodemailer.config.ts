import * as dotenv from 'dotenv';
dotenv.config();

type TransportConfig = {
  host: string;
  port: number;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
};

export const transportConfig: TransportConfig = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};
