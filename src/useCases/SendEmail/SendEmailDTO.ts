export interface ISendEmailDTO {
  to: string;
  from: string;
  name?: string;
  email?: string;
  message?: string;
  reply_to?: string;
  cc?: string;
}
