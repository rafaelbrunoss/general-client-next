import { Notification } from '@domain/common/models';

export interface NotificationState {
  notifications: Notification[];
}

export const initialNotificationState: NotificationState | any = {
  notifications: [],
};
