import { interfaces } from 'inversify';

import { INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS } from '@common/infrastructure';
import { BaseModule } from '@common/infrastructure/module';
import {
  EncryptionService,
  EnvironmentService,
  HttpService,
  I18nService,
  MonitoringToolService,
  StorageService,
  ValidatorService,
} from '@common/infrastructure/services';

export class CommonModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind): void => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.provideServices(bind);
  }

  private provideServices(bind: interfaces.Bind): void {
    bind(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.EncryptionService).to(
      EncryptionService,
    );
    bind(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.EnvironmentService).to(
      EnvironmentService,
    );
    bind(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.I18nService).to(I18nService);
    bind(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.StorageService).to(StorageService);
    bind(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.HttpService).toDynamicValue(
      (context) => {
        return new HttpService(
          context.container.get(
            INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.EnvironmentService,
          ),
          context.container.get(
            INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.StorageService,
          ),
          context.container.get(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.I18nService),
        );
      },
    );
    bind(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.MonitoringToolService).to(
      MonitoringToolService,
    );
    bind(INFRASTRUCTURE_COMMON_SERVICES_SYMBOLS.ValidatorService).to(
      ValidatorService,
    );
  }
}
