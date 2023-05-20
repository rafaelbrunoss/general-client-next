import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return (
      <input
        className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
        {...props}
        ref={ref}
      />
    );
  },
);

Input.displayName = 'Input';
