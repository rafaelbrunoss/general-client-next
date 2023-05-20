import { forwardRef } from 'react';

import { Input, InputProps } from '@common/ui/components/lib';

export const EmailInput = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <Input type='email' placeholder='Email' {...props} ref={ref} />;
  },
);

EmailInput.displayName = 'EmailInput';
