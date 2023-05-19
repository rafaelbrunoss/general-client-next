import { NotificationStyles } from '@common/domain/models';
import { AnyObject } from '@common/domain/utils';
import { Id } from '@common/domain/value-objects';

export class Notification {
  public id: Id = Id.create();
  public style: NotificationStyles = NotificationStyles.NONE;
  public icon = true;
  public timeout = 10000; // milliseconds
  public content: string | AnyObject = '';

  constructor(notification: Partial<Notification>) {
    Object.assign(this, notification);
  }
}
