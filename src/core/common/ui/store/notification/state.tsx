import { Notification } from '@common/domain/models';

export interface INotificationState {
  notifications: Notification[];
}

export const initialNotificationState: INotificationState | any = {
  notifications: [],
};
