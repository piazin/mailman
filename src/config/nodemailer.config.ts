import * as dotenv from 'dotenv';
dotenv.config();

type TransportConfig = {
  service: string;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
};

export const transportConfig: TransportConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};
