import { injectable } from 'inversify';

import { APP_CONFIG } from '@common/domain/utils';

@injectable()
export class MonitoringToolService {
  public initConfig: any = {
    dsn: APP_CONFIG.sentryDns,
  };
}
