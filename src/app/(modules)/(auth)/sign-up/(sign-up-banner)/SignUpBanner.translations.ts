import { II18n } from '@common/domain/models';

import { I18nService } from '@common/infrastructure/services';

const translations: II18n = {
  enUS: {},
  es: {},
  ptBR: {},
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
