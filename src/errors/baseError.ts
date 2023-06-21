export class ErrorToSendEmail extends Error {
  private _message: string;
  private _statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message);
    this._message = message;
    this._statusCode = statusCode;
  }

  get message(): string {
    return this._message;
  }

  get statusCode(): number {
    return this._statusCode;
  }
}

export class BadRequestException extends Error {
  private _message: string = '';
  private _statusCode: number;

  constructor(message = 'Ops! Bad Request!', statusCode = 400) {
    super(message);
    this._message = message;
    this._statusCode = statusCode;
  }

  get message(): string {
    return this._message;
  }

  get statusCode(): number {
    return this._statusCode;
  }
}
