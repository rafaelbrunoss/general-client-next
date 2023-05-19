import { injectable } from 'inversify';

import { ApiResult } from '@common/domain/models';

import { HttpService } from '@common/infrastructure/services';

import { IAuthGateway, AuthUser, SignInCredentials, SignUpData } from '@auth/domain';


@injectable()
export class AuthHttpGateway implements IAuthGateway {
  constructor(private http: HttpService) {}

  public async signIn(
    signInCredentials: SignInCredentials,
  ): Promise<ApiResult<AuthUser>> {
    return await this.http.post<AuthUser>('/auth/v1/sign-in', signInCredentials);
  }

  public async signUp(signUpData: SignUpData): Promise<ApiResult<AuthUser>> {
    return await this.http.post<AuthUser>('/auth/v1/sign-up', signUpData);
  }
}
