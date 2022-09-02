import React from 'react';
import Button from './Button';

type LandingProps = {};

const Landing: React.FC<LandingProps> = () => {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
      <div className='space-y-8 '>
        <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl'>
          <span
            className='block bg-gradient-to-r
           from-pink-600 to-violet-500  bg-clip-text text-transparent'
          >
            Powered
          </span>
          <span className='block '>By Intellect</span>
          <span className='block'>Driven By Values</span>
        </h1>

        <div>
          <Button title='Buy Now' />
          <a className='link'>learn More</a>
        </div>
      </div>
    </section>
  );
};
export default Landing;
