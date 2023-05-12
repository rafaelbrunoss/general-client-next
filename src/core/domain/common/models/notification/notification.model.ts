import { NotificationStyles } from '@domain/common/models';
import { Id } from '@domain/common/value-objects';
import { AnyObject } from '@domain/utils';

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
