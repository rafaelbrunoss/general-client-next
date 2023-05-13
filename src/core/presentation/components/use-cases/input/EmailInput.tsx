import { FunctionComponent } from 'react';

import { Input, InputProps } from '@presentation/components/lib';

export const EmailInput: FunctionComponent<InputProps> = (props: InputProps) => {
  return <Input type='email' placeholder='Email' {...props} />;
};
