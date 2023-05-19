import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { injectable } from 'inversify';
import platform from 'platform';

import {
  ApiResult,
  IHttpClientResult,
  IHttpClientConfig,
} from '@common/domain/models';
import { AnyObject, APP_CONFIG } from '@common/domain/utils';
import { Id } from '@common/domain/value-objects';

import { EnvironmentService } from '@common/infrastructure/services/environment.service';
import { I18nService } from '@common/infrastructure/services/i18n.service';
import { StorageService } from '@common/infrastructure/services/storage.service';

import { AuthUser, SignInCredentials } from '@auth/domain/entities';

@injectable()
export class HttpService {
  private axiosInstance: any;

  constructor(
    private environmentService: EnvironmentService,
    private storageService: StorageService,
    private i18nService: I18nService,
  ) {
    this.axiosInstance = axios.create({ baseURL: this.baseURL });
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

  private addHeaders = async (
    config: IHttpClientConfig,
  ): Promise<IHttpClientConfig> => {
    if (!config.headers) {
      config.headers = {};
    }

    config.headers['x-platform'] = platform;
    config.headers['x-tracker'] = Id.create();

    config.headers['x-enviroment'] = APP_CONFIG.environment;

    const currentUser = (await this.storageService.getItem<AuthUser>(
      'authUser',
    )) as AuthUser;
    if (currentUser && currentUser.id) {
      config.headers['x-language'] = this.i18nService.userLanguage;
      config.headers.Authorization = `Bearer ${currentUser.token}`;
    }

    return config;
  };

  private async autoLogin(): Promise<void> {
    const signInCredentials = (await this.storageService.getItem<SignInCredentials>(
      'signInCredentials',
    )) as SignInCredentials;
    await this.post(`${this.baseURL}/auth/sign-in`, signInCredentials);
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
    config: IHttpClientConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: IHttpClientResult<Result> = await this.axiosInstance.get(
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
    config: IHttpClientConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: IHttpClientResult<Result> = await this.axiosInstance.post(
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
    config: IHttpClientConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: IHttpClientResult<Result> = await this.axiosInstance.put(
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
    config: IHttpClientConfig = {},
  ): Promise<ApiResult<Result>> {
    try {
      const axiosResult: IHttpClientResult<Result> = await this.axiosInstance.delete(
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
