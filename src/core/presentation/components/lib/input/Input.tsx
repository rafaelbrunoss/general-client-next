import { ComponentPropsWithoutRef, FunctionComponent } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  return (
    <input
      className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
      {...props}
    />
  );
};
