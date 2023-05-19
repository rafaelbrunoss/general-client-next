import { injectable } from 'inversify';
import * as Yup from 'yup';

import { ObjectShapeSchema } from '@common/domain/models';
import { AnyObject } from '@common/domain/utils';

@injectable()
export class ValidatorService {
  public validator = Yup;

  public createSchema = (objectShape: Yup.ObjectShape): ObjectShapeSchema =>
    Yup.object().shape(objectShape);

  public validateSchema = (
    object: AnyObject,
    objectSchema: ObjectShapeSchema,
  ): void => {
    try {
      objectSchema.validateSync(object);
    } catch (error: any) {
      throw new Error(error.errors);
    }
  };
}
