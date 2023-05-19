'use client';

import Link from 'next/link';

import { Button } from '@common/ui/components/lib';
import {
  EmailInput,
  NameInput,
  PasswordInput,
} from '@common/ui/components/use-cases';

import { translate } from './SignUpForm.translations';

export default function SignUpForm() {
  const signUp = () => {
    console.log('TO DO');
  };

  return (
    <div className='w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between items-center'>
      <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto'>
        Brand
      </h1>
      <div className='w-full flex flex-col max-w-[500px]'>
        <div className='w-full flex flex-col mb-2'>
          <h3 className='text-3xl font-semibold mb-2'>{translate('signUp')}</h3>
        </div>

        <div className='w-full flex flex-col'>
          <NameInput className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none my-4' />
          <EmailInput className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none my-4' />
          <PasswordInput className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none my-4' />
        </div>

        <div className='w-full flex flex-col my-4'>
          <Button
            className='w-full my-2 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer bg-[#060606] text-white'
            onClick={signUp}
          >
            {translate('signUp')}
          </Button>
        </div>
      </div>

      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-[#060606]'>
          <Link
            className='font-semibold underline underline-offset-2 cursor-pointer'
            href='/sign-in'
          >
            {translate('login')}
          </Link>
        </p>
      </div>
    </div>
  );
}
