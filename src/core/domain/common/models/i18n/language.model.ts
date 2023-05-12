export class Language {
  public ptbr: string | null = null;
  public es: string | null = null;
  public en: string | null = null;

  constructor(language: Partial<Language>) {
    Object.assign(this, language);
  }
}
