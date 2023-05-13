import Image from 'next/image';

import { translate } from './SignInBanner.translations';

export default function SignInBanner() {
  return (
    <div className='relative w-1/2 h-full flex flex-col'>
      <div className='absolute top-[20%] left-[10%] flex flex-col'>
        <h1 className='text-4xl text-white font-bold my-4'>
          {translate('turnYourIdeas')}
        </h1>
        <p className='text-xl text-white font-normal'>{translate('startForFree')}</p>
      </div>
      <Image
        width={1}
        height={1}
        sizes='100vw'
        src='/stars.jpg'
        className='w-full h-full object-cover'
        alt='Login Image'
      />
    </div>
  );
}
