import * as Yup from 'yup';

import { ObjectShapeSchema } from '@domain/common/models';
import { AnyObject } from '@domain/utils';

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
