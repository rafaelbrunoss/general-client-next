import { forwardRef } from 'react';

import { Input, InputProps } from '@common/ui/components/lib';

import { translate } from './NameInput.translations';

export const NameInput = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <Input placeholder={translate('name')} {...props} ref={ref} />;
  },
);

NameInput.displayName = 'NameInput';
