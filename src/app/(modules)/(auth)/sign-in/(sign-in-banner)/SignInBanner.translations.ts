import { II18n } from '@common/domain/models';

import { I18nService } from '@common/infrastructure/services';

const translations: II18n = {
  enUS: {
    turnYourIdeas: 'Turn your ideas into reality',
    startForFree: 'Start for free',
  },
  es: {
    turnYourIdeas: 'Convierte tus ideas en realidad',
    startForFree: 'Empieza gratis',
  },
  ptBR: {
    turnYourIdeas: 'Transforme suas ideias em realidade',
    startForFree: 'Comece de graça',
  },
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
