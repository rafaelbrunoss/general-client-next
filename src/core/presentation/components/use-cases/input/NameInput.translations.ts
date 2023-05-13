import { II18n } from '@domain/common/models';

import { I18nService } from '@infrastructure/services';

const translations: II18n = {
  es: {
    name: 'Nombre',
  },
  enUS: {
    name: 'Name',
  },
  ptBR: {
    name: 'Nome',
  },
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
