import { injectable } from 'inversify';

import { Languages, II18n } from '@common/domain/models';
import { replaceAllText } from '@common/domain/utils';

@injectable()
export class I18nService {
  public userLanguage = Languages.DEFAULT;

  public emptyDictionary: II18n = {
    enUS: {},
    es: {},
    ptBR: {},
  };

  public commonDictionary: II18n = {
    enUS: {
      loading: 'Loading',
      required: 'Required',
      INTERNAL_SERVER_ERROR: 'Internal server error!',
    },
    es: {
      loading: 'Cargando',
      required: 'Requerido',
      INTERNAL_SERVER_ERROR: 'Error de servidor!',
    },
    ptBR: {
      loading: 'Loading',
      required: 'Obrigatório',
      INTERNAL_SERVER_ERROR: 'Erro interno do servidor!',
    },
  };

  public extendedDictionary: II18n = {
    enUS: { ...this.commonDictionary.enUS },
    es: { ...this.commonDictionary.es },
    ptBR: { ...this.commonDictionary.ptBR },
  };

  public translate(
    translations: II18n,
    key: string, // 'Account: {0}'
    args?: string[], // 123 -> Account: 123
  ): string {
    const extendedDictionary = {
      enUS: { ...this.extendedDictionary.enUS, ...translations.enUS },
      es: { ...this.extendedDictionary.es, ...translations.es },
      ptBR: { ...this.extendedDictionary.ptBR, ...translations.ptBR },
    };

    let result = '';
    switch (this.userLanguage) {
      case 'en-US':
        result = extendedDictionary.enUS[String(key)];
        break;
      case 'es':
        result = extendedDictionary.es[String(key)];
        break;
      case 'pt-BR':
        result = extendedDictionary.ptBR[String(key)];
        break;
      default:
        result = extendedDictionary.ptBR[String(key)];
        break;
    }
    if (args && args.length && result && result.length) {
      result = result.replace(/{(\d+)}/g, (match: string, index: number): string =>
        typeof args[Number(index)] === 'undefined' ? match : args[Number(index)],
      );
    }

    if (result) {
      result = replaceAllText(result, '[b]', '<b>');
      result = replaceAllText(result, '[/b]', '</b>');
      result = replaceAllText(result, '[li]', '<li>');
      result = replaceAllText(result, '[/li]', '</li>');
      result = replaceAllText(result, '[/br]', '</br>');
    }

    return result || key;
  }
}
