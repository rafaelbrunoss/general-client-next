import { II18n } from '@domain/common/models';

import { I18nService } from '@infrastructure/services';

const translations: II18n = {
  es: {},
  enUS: {},
  ptBR: {},
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
