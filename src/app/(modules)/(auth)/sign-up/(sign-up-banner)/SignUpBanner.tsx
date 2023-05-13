import Image from 'next/image';

export default function SignUpBanner() {
  return (
    <div className='relative w-1/2 h-full flex flex-col'>
      <Image
        width={1}
        height={1}
        sizes='100vw'
        src='/night-sky.jpg'
        className='w-full h-full object-cover'
        alt='Login Image'
      />
    </div>
  );
}
