import { ComponentPropsWithoutRef, FunctionComponent } from 'react';

import classnames from 'classnames';

export type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { className } = props;
  const _props = { ...props };

  const _className = classnames(
    'w-full font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer',
    className,
  );
  return (
    <button {..._props} className={_className}>
      {props.children}
    </button>
  );
};
