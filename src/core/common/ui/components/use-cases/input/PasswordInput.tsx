import { forwardRef } from 'react';

import { Input, InputProps } from '@common/ui/components/lib';

import { translate } from './PasswordInput.translations';

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return (
      <Input
        type='password'
        placeholder={translate('password')}
        {...props}
        ref={ref}
      />
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
