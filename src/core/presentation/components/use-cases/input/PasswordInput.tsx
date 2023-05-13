import { FunctionComponent } from 'react';

import { Input, InputProps } from '@presentation/components/lib';

import { translate } from './PasswordInput.translations';

export const PasswordInput: FunctionComponent<InputProps> = (props: InputProps) => {
  return <Input type='password' placeholder={translate('password')} {...props} />;
};
