export class AuthCredentials {
  public email = '';
  public password = '';

  constructor(authCredentials: Partial<AuthCredentials>) {
    Object.assign(this, authCredentials);
  }

  // public static setAuthCredentials = async (
  //   authCredentials: AuthCredentials,
  // ): Promise<void> => {
  //   await storageService.setItem('authCredentials', authCredentials);
  // };
}
