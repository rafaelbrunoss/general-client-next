export class EncryptionService {
  private validateText(text: string): string {
    if (typeof text == 'string') {
      return text;
    } else {
      return JSON.stringify(text);
    }
  }

  public fromBase64(text: string): string {
    try {
      return Buffer.from(this.validateText(text)).toString('base64');
    } catch {
      return Buffer.from(text).toString('base64');
    }
  }

  public fromBase64UrlSafe(text: string): string {
    try {
      return Buffer.from(
        this.validateText(
          text.replace(/~/g, '+').replace(/_/g, '/').replace(/-/g, '='),
        ),
      ).toString('base64');
    } catch {
      return Buffer.from(
        text.replace(/~/g, '+').replace(/_/g, '/').replace(/-/g, '='),
      ).toString('base64');
    }
  }

  public fromBase64Loop(text: string, loop: number): string {
    if (text === undefined || text === null || !text) {
      return '';
    }

    let result = text;
    for (let l = 1; l <= loop; l++) {
      result = this.fromBase64(result);
    }

    return result;
  }

  public toBase64(text: string): string {
    try {
      return Buffer.from(this.validateText(text), 'base64').toString('ascii');
    } catch {
      return Buffer.from(text, 'base64').toString('ascii');
    }
  }

  public toBase64UrlSafe(text: string): string {
    try {
      return Buffer.from(this.validateText(text), 'base64')
        .toString('ascii')
        .replace(/\+/g, '~')
        .replace(/\//g, '_')
        .replace(/[=]/g, '-');
    } catch {
      return Buffer.from(text, 'base64')
        .toString('ascii')
        .replace(/\+/g, '~')
        .replace(/\//g, '_')
        .replace(/[=]/g, '-');
    }
  }

  public toBase64Loop(text: string, loop: number): string {
    if (text === undefined || text === null || !text) {
      return '';
    }

    let result = text;
    for (let l = 1; l <= loop; l++) {
      result = this.toBase64(result);
    }

    return result;
  }
}
