import { ApiResult } from '@common/domain/models';

import { IAuthGateway, AuthUser } from '@auth/domain';

export class AutoSignInUseCase {
  constructor(private authGateway: IAuthGateway) {}

  public async execute(): Promise<ApiResult<AuthUser>> {
    return await this.authGateway.autoSignIn();
  }
}
