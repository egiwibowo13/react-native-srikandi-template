export class ClientError extends Error {
  constructor(message: string, code: number = 400) {
    super(message);
    this.code = code;
    this.name = 'ClientError';
  }
  code: number;
}
