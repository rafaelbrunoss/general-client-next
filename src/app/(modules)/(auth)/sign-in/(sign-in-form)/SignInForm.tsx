'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button, Checkbox } from '@presentation/components/lib';
import { EmailInput, PasswordInput } from '@presentation/components/use-cases';

import { translate } from './SignInForm.translations';

export default function SignInForm() {
  const signIn = () => {
    console.log('TO DO');
  };

  const signUp = () => {
    console.log('TO DO');
  };

  const signInWithGoogle = () => {
    console.log('TO DO');
  };

  return (
    <div className='w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between items-center'>
      <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto'>
        Brand
      </h1>
      <div className='w-full flex flex-col max-w-[500px]'>
        <div className='w-full flex flex-col mb-2'>
          <h3 className='text-3xl font-semibold mb-2'>Login</h3>
        </div>

        <div className='w-full flex flex-col'>
          <EmailInput className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none' />
          <PasswordInput className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none' />
        </div>

        <div className='w-full flex items-center justify-between my-2'>
          <div className='w-full flex items-center'>
            <Checkbox />
            <p className='text-sm'>{translate('rememberMe')}</p>
          </div>

          <Link
            className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'
            href='/'
          >
            {translate('forgotPassword')}
          </Link>
        </div>

        <div className='w-full flex flex-col my-4'>
          <Button
            className='w-full font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer bg-[#060606] text-white my-2'
            onClick={signIn}
          >
            {translate('login')}
          </Button>

          <Button
            className='w-full font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer bg-white border border-black/40 text-[#060606] my-2'
            onClick={signUp}
          >
            {translate('signUp')}
          </Button>
        </div>
        <div className='w-full flex items-center justify-center relative py-2 mb-2'>
          <div className='w-full h-[1px] bg-black/40' />
          <p className='text-lg absolute text-black/80 bg-[#F5F5F5]'>
            {translate('or')}
          </p>
        </div>
        <Button
          className='w-full font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer bg-white border border-black/40 text-[#060606] my-4'
          onClick={signInWithGoogle}
        >
          <Image
            width={22}
            height={1}
            src='/google.png'
            className='h-6 mr-2'
            alt='Google Icon'
          />
          {translate('signInWithGoogle')}
        </Button>
      </div>

      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-[#060606]'>
          {translate('dontHaveAnAccount')}
          <Link
            className='font-semibold underline underline-offset-2 cursor-pointer'
            href='/sign-up'
          >
            {translate('signUpForFree')}
          </Link>
        </p>
      </div>
    </div>
  );
}
