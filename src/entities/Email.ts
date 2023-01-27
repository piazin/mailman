export class Email {
  public readonly to: string;
  public readonly name: string;
  public readonly content: string;

  constructor(props: Email) {
    Object.assign(this, props);
  }
}
