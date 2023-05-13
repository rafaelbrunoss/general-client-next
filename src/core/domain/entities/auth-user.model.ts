import { Languages } from '@domain/common/models';
import { Id } from '@domain/common/value-objects';

import { StorageService } from '@infrastructure/services';

export class AuthUser {
  public id: Id = Id.create();
  public name = '';
  public email = '';
  public photoUrl = '';

  public token = '';
  public tokenExpirationDate: Date = new Date();

  public language: Languages = Languages.DEFAULT;
  public permission: number[] = [];

  public static _currentUser: AuthUser;

  constructor(authUser: Partial<AuthUser>) {
    Object.assign(this, authUser);
  }

  public static getCurrentUser = async (): Promise<AuthUser> => {
    if (!AuthUser._currentUser) {
      AuthUser._currentUser = (await new StorageService().getItem<AuthUser>(
        'authUser',
      )) as AuthUser;
    }

    return AuthUser._currentUser;
  };

  public static setCurrentUser = async (authUser: AuthUser): Promise<void> => {
    await new StorageService().setItem('authUser', authUser);
    AuthUser._currentUser = authUser;
  };

  public static isAuthenticated = async (): Promise<boolean> => {
    const user = await AuthUser.getCurrentUser();
    if (user && user.id && user.id.value !== '' && user.id.value !== Id.nullId) {
      return true;
    }
    return false;
  };

  public static getPermissions = async (): Promise<number[]> => {
    if (await AuthUser.isAuthenticated()) {
      const user = await AuthUser.getCurrentUser();
      return user.permission;
    }

    return [];
  };
}
