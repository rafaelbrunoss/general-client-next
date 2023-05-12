export class StorageService {
  public getItem = async <T>(name: string): Promise<T | undefined> => {
    let item;
    try {
      item = localStorage.getItem(name);
    } catch (error) {
      console.error(error);
    }
    return item ? (JSON.parse(item) as T) : undefined;
  };

  public setItem = async <T>(name: string, value: T): Promise<void> => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  public removeItem = async (name: string): Promise<void> => {
    try {
      localStorage.removeItem(name);
    } catch (error) {
      console.error(error);
    }
  };

  public clearStorage = async (): Promise<void> => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(error);
    }
  };
}
