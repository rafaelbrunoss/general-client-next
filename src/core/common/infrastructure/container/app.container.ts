import {
  EncryptionService,
  EnvironmentService,
  HttpService,
  I18nService,
  MonitoringToolService,
  StorageService,
  ValidatorService,
  INFRASTRUCTURE_SERVICES_SYMBOLS,
} from '@common/infrastructure/services';

import { AUTH_SYMBOLS } from '@auth/domain';

import { SignInUseCase } from '@auth/application';

import { AuthHttpGateway } from '@auth/infrastructure';

import { BaseContainer } from './base.container';

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: 'Singleton',
      skipBaseClassChecks: true,
    });
  }

  /**
   * @description Order of initialization matters
   */
  public init(): void {
    this.provideServices();

    this.provideAuthModule();
  }

  private provideServices(): void {
    this.bind(INFRASTRUCTURE_SERVICES_SYMBOLS.EncryptionService).to(
      EncryptionService,
    );
    this.bind(INFRASTRUCTURE_SERVICES_SYMBOLS.EnvironmentService).to(
      EnvironmentService,
    );
    this.bind(INFRASTRUCTURE_SERVICES_SYMBOLS.I18nService).to(I18nService);
    this.bind(INFRASTRUCTURE_SERVICES_SYMBOLS.StorageService).to(StorageService);
    this.bind(INFRASTRUCTURE_SERVICES_SYMBOLS.HttpService).toDynamicValue(
      (context) => {
        return new HttpService(
          context.container.get(INFRASTRUCTURE_SERVICES_SYMBOLS.EnvironmentService),
          context.container.get(INFRASTRUCTURE_SERVICES_SYMBOLS.StorageService),
          context.container.get(INFRASTRUCTURE_SERVICES_SYMBOLS.I18nService),
        );
      },
    );
    this.bind(INFRASTRUCTURE_SERVICES_SYMBOLS.MonitoringToolService).to(
      MonitoringToolService,
    );
    this.bind(INFRASTRUCTURE_SERVICES_SYMBOLS.ValidatorService).to(ValidatorService);
  }

  private provideAuthModule(): void {
    this.bind(AUTH_SYMBOLS.AuthHttpGateway).toDynamicValue((context) => {
      return new AuthHttpGateway(
        context.container.get(INFRASTRUCTURE_SERVICES_SYMBOLS.HttpService),
      );
    });

    // UseCases

    this.bind(AUTH_SYMBOLS.SignInUseCase).toDynamicValue((context) => {
      return new SignInUseCase(context.container.get(AUTH_SYMBOLS.AuthHttpGateway));
    });
  }
}

const appContainer = new AppContainer();
appContainer.init();

export { appContainer };
