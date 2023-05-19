import { II18n } from '@common/domain/models';

import { I18nService } from '@common/infrastructure/services';

const translations: II18n = {
  enUS: {
    signUp: 'Sign Up',
    login: 'Login',
  },
  es: {
    signUp: 'Inscribirse',
    login: 'Iniciar sesión',
  },
  ptBR: {
    signUp: 'Cadastrar',
    login: 'Entrar',
  },
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
