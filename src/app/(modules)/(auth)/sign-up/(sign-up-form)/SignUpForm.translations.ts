import { II18n } from '@domain/common/models';

import { I18nService } from '@infrastructure/services';

const translations: II18n = {
  es: {
    signUp: 'Inscribirse',
    login: 'Iniciar sesión',
  },
  enUS: {
    signUp: 'Sign Up',
    login: 'Login',
  },
  ptBR: {
    signUp: 'Cadastrar',
    login: 'Entrar',
  },
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
