import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'>
          <div className='relative  h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image
              src='https://rb.gy/vsvv2o'
              layout='fill'
              objectFit='contain'
              alt='h'
            />
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
