import { II18n } from '@domain/common/models';

import { I18nService } from '@infrastructure/services';

const translations: II18n = {
  es: {
    turnYourIdeas: 'Convierte tus ideas en realidad',
    startForFree: 'Empieza gratis',
  },
  enUS: {
    turnYourIdeas: 'Turn your ideas into reality',
    startForFree: 'Start for free',
  },
  ptBR: {
    turnYourIdeas: 'Transforme suas ideias em realidade',
    startForFree: 'Comece de graça',
  },
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
