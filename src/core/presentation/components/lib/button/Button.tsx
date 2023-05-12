import { FunctionComponent, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren;

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};
