import { injectable } from 'inversify';

import { ApiResult } from '@common/domain/models';

import { HttpService, StorageService } from '@common/infrastructure/services';

import { IAuthGateway, AuthUser, SignInCredentials, SignUpData } from '@auth/domain';

@injectable()
export class AuthHttpGateway implements IAuthGateway {
  constructor(private http: HttpService, private storage: StorageService) {}

  public async signIn(
    signInCredentials: SignInCredentials,
  ): Promise<ApiResult<AuthUser>> {
    return await this.http.post<AuthUser>('/auth/v1/sign-in', signInCredentials);
  }

  public async signUp(signUpData: SignUpData): Promise<ApiResult<AuthUser>> {
    return await this.http.post<AuthUser>('/auth/v1/sign-up', signUpData);
  }

  public async autoSignIn(): Promise<ApiResult<AuthUser>> {
    const signInCredentials = (await this.storage.getItem<SignInCredentials>(
      'signInCredentials',
    )) as SignInCredentials;
    return await this.http.post('/auth/v1/sign-in', signInCredentials);
  }
}
