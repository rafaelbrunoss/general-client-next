import { FunctionComponent } from 'react';

import { Input, InputProps } from '@common/ui/components/lib';

import { translate } from './NameInput.translations';

export const NameInput: FunctionComponent<InputProps> = (props: InputProps) => {
  return <Input placeholder={translate('name')} {...props} />;
};
