import { FunctionComponent } from 'react';

import { Input, InputProps } from '@common/ui/components/lib';

export const EmailInput: FunctionComponent<InputProps> = (props: InputProps) => {
  return <Input type='email' placeholder='Email' {...props} />;
};
