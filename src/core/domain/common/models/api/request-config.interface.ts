import { AnyObject } from '@domain/utils';

export interface RequestConfig {
  url?: string;
  params?: AnyObject;
  data?: AnyObject;
  headers?: AnyObject;
}
