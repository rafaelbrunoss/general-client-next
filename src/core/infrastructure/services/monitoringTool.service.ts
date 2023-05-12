import { APP_CONFIG } from '@domain/utils';

export class MonitoringToolService {
  public initConfig: any = {
    dsn: APP_CONFIG.sentryDns,
  };
}
