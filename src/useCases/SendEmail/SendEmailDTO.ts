export interface ISendEmailDTO {
  to: string;
  from: string;
  name?: string;
  email: string;
  body: string;
}
