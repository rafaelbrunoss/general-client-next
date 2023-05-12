import { replaceAllText } from '@domain/utils';
import { Languages, II18n } from '@domain/common/models';

export class I18nService {
  public userLanguage = Languages.DEFAULT;

  public emptyDictionary: II18n = {
    es: {},
    enUS: {},
    ptBR: {},
  };

  public commonDictionary: II18n = {
    es: {
      loading: 'Cargando',
      required: 'Requerido',
      INTERNAL_SERVER_ERROR: 'Error de servidor!',
    },
    enUS: {
      loading: 'Loading',
      required: 'Required',
      INTERNAL_SERVER_ERROR: 'Internal server error!',
    },
    ptBR: {
      loading: 'Loading',
      required: 'Obrigatório',
      INTERNAL_SERVER_ERROR: 'Erro interno do servidor!',
    },
  };

  public extendedDictionary: II18n = {
    es: { ...this.commonDictionary.es },
    enUS: { ...this.commonDictionary.enUS },
    ptBR: { ...this.commonDictionary.ptBR },
  };

  public translate(
    translations: II18n,
    key: string, // 'Account: {0}'
    args?: string[], // 123 -> Account: 123
  ): string {
    const extendedDictionary = {
      es: { ...this.extendedDictionary.es, ...translations.es },
      enUS: { ...this.extendedDictionary.enUS, ...translations.enUS },
      ptBR: { ...this.extendedDictionary.ptBR, ...translations.ptBR },
    };

    let result = '';
    switch (this.userLanguage) {
      case 'pt-BR':
        result = extendedDictionary.ptBR[String(key)];
        break;
      case 'en-US':
        result = extendedDictionary.enUS[String(key)];
        break;
      case 'es':
        result = extendedDictionary.es[String(key)];
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
