import { injectable } from 'inversify';

import { ApiResult } from '@common/domain/models';

import { HttpService } from '@common/infrastructure/services';

import { IUserGateway, User } from '@user/domain';

@injectable()
export class UserHttpGateway implements IUserGateway {
  constructor(private http: HttpService) {}

  public async create(user: User): Promise<ApiResult> {
    return await this.http.post<User>('/user/v1/user', user);
  }

  public async findById(id: string): Promise<ApiResult<User>> {
    return await this.http.get<User>(`/user/v1/user/${id}`);
  }

  public async findAll(): Promise<ApiResult<User[]>> {
    return await this.http.get<User[]>('/user/v1/user');
  }

  public async update(user: User): Promise<ApiResult> {
    return await this.http.put<User>('/user/v1/user', user);
  }

  public async delete(id: string): Promise<ApiResult> {
    return await this.http.post<User>('/user/v1/user', id);
  }
}
