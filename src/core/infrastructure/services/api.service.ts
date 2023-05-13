import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import platform from 'platform';

import {
  ApiResult,
  AxiosResult,
  RequestConfig,
  ServicesType,
  Services,
} from '@domain/common/models';
import { Id } from '@domain/common/value-objects';
import { AuthUser, AuthCredentials } from '@domain/entities';
import { AnyObject, APP_CONFIG } from '@domain/utils';

import {
  EnvironmentService,
  StorageService,
  I18nService,
} from '@infrastructure/services';

export class ApiService {
  private axiosInstance: any;

  constructor(
    private service: ServicesType,
    private environmentService: EnvironmentService,
    private storageService: StorageService,
    private i18nService: I18nService,
  ) {
    let baseURL = '';
    switch (this.service) {
      case Services.AUTH:
        baseURL = this.baseURLAuth;
        break;

      default:
        break;
    }
    this.axiosInstance = axios.create({ baseURL });
    axiosRetry(this.axiosInstance, {
      retries: 5,
      retryDelay: (retryCount: number): number => retryCount * 2000,
      retryCondition: (error: AxiosError<unknown, any>): boolean =>
        error.response === undefined ||
        error.response.status === undefined ||
        error.response.status === 503 ||
        error.response.status === 504,
    });
    this.axiosInstance.interceptors.response.use(
      (response: any) => response,
      (error: AxiosError<unknown, any>) => {
        if (error && error.response) {
          if (error.response.status === 403) {
            console.error('Error 403');
          } else if (error.response.status === 401) {
            console.error('Error 401. Redirect to login');
          }
        }

        return Promise.reject(error);
      },
    );
  }

  private get baseURL(): string {
    if (this.environmentService.isProd) {
      return 'https://api.domain.com';
    } else if (this.environmentService.isStg) {
      return 'https://api-stg.domain.com';
    } else if (this.environmentService.isDev) {
      return 'https://api-dev.domain.com';
    } else {
      return 'https://api-dev.domain.com';
    }
  }

  private get baseURLAuth(): string {
    return `${this.baseURL}/auth`;
  }

  private addHeaders = async (config: RequestConfig): Promise<RequestConfig> => {
    if (!config.headers) {
      config.headers = {};
    }

    config.headers['x-platform'] = platform;
    config.headers['x-tracker'] = Id.create();

    config.headers['x-enviroment'] = APP_CONFIG.environment;

    const currentUser = await AuthUser.getCurrentUser();
    if (currentUser && currentUser.id) {
      config.headers['x-language'] = this.i18nService.userLanguage;
      config.headers.Authorization = `Bearer ${currentUser.token}`;
    }

    return config;
  };

  private async autoLogin(): Promise<void> {
    const authCredentials = (await this.storageService.getItem<AuthCredentials>(
      'authCredentials',
    )) as AuthCredentials;
    await this.post(this.baseURLAuth, authCredentials);
  }

  private checkTokenExpiration = (apiResult: ApiResult): void => {
    // Notify the user about the remaining time of authentication
    if (apiResult && apiResult.tokenExpirationInMinutes) {
      if (apiResult.tokenExpirationInMinutes <= 0) {
        this.autoLogin();
      } else {
        console.warn('Remaining time: ', apiResult.tokenExpirationInMinutes);
      }
    }
  };

  public async get<Result>(
    url: string,
    config: RequestConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: AxiosResult<Result> = await this.axiosInstance.get(
        url,
        await this.addHeaders(config),
      );
      const apiResult: ApiResult<Result> = axiosResult.data;

      this.checkTokenExpiration(apiResult);

      return apiResult;
    } catch (error) {
      return new ApiResult({
        success: false,
        messages: [JSON.stringify(error)],
      });
    }
  }

  public async post<Result = AnyObject>(
    url: string,
    data: AnyObject,
    config: RequestConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: AxiosResult<Result> = await this.axiosInstance.post(
        url,
        data,
        await this.addHeaders(config),
      );
      const apiResult: ApiResult<Result> = axiosResult.data;

      this.checkTokenExpiration(apiResult);

      return apiResult;
    } catch (error) {
      return new ApiResult({
        success: false,
        messages: [JSON.stringify(error)],
      });
    }
  }

  public async put<Result = AnyObject>(
    url: string,
    data: AnyObject,
    config: RequestConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: AxiosResult<Result> = await this.axiosInstance.put(
        url,
        data,
        await this.addHeaders(config),
      );
      const apiResult: ApiResult<Result> = axiosResult.data;

      this.checkTokenExpiration(apiResult);

      return apiResult;
    } catch (error) {
      return new ApiResult({
        success: false,
        messages: [JSON.stringify(error)],
      });
    }
  }

  public async delete<Result = AnyObject>(
    url: string,
    config: RequestConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: AxiosResult<Result> = await this.axiosInstance.delete(
        url,
        await this.addHeaders(config),
      );
      const apiResult: ApiResult<Result> = axiosResult.data;

      this.checkTokenExpiration(apiResult);

      return apiResult;
    } catch (error) {
      return new ApiResult({
        success: false,
        messages: [JSON.stringify(error)],
      });
    }
  }
}
