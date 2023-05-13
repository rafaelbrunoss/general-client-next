import { II18n } from '@domain/common/models';

import { I18nService } from '@infrastructure/services';

const translations: II18n = {
  es: {
    password: 'Contraseña',
  },
  enUS: {
    password: 'Password',
  },
  ptBR: {
    password: 'Senha',
  },
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
