import { ComponentPropsWithoutRef, FunctionComponent } from 'react';

export type CheckboxProps = ComponentPropsWithoutRef<'input'>;

export const Checkbox: FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
  return <input type='checkbox' className='w-4 h-4 mr-2' {...props} />;
};
