import { ApiResult } from '@common/domain/models';

import { User } from '@user/domain';

export interface IUserGateway {
  create: (user: User) => Promise<ApiResult>;
  findById: (id: string) => Promise<ApiResult<User>>;
  findAll: (id: string) => Promise<ApiResult<User[]>>;
  update: (user: User) => Promise<ApiResult>;
  delete: (user: User) => Promise<ApiResult>;
}
