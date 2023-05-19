import { randomUUID } from 'crypto';

export class Id {
  private _value: number | string = '00000000-0000-0000-0000-000000000000';
  private static _nullId = '00000000-0000-0000-0000-000000000000';

  private constructor(id?: number | string | undefined) {
    if (!id) {
      this._value = randomUUID();
    } else if (id === 0) {
      this._value = '00000000-0000-0000-0000-000000000000';
    } else {
      this._value = id;
    }
  }

  public get value(): number | string {
    return this._value;
  }

  public static get nullId(): string {
    return this._nullId;
  }

  public static create(id?: number | string | undefined) {
    return new Id(id);
  }
}
