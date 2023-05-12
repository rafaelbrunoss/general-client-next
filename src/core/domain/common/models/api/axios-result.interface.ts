import { ApiResult } from '@domain/common/models';

export interface AxiosResult<T = any> {
  data: ApiResult<T>;
  status: number;
}
