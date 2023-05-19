export class Language {
  public en: string | null = null;
  public es: string | null = null;
  public ptbr: string | null = null;

  constructor(language: Partial<Language>) {
    Object.assign(this, language);
  }
}
