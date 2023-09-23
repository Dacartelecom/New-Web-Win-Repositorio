'use client'
import  { useEffect, useState } from 'react';
import logo from '../../public/win_logo.png';

const Header = () => {
    const [numberCall, setNumberCall] = useState<string>('(01) 6806775');
    const [tSource, setTSource] = useState<undefined | string>(undefined);

    useEffect(() => {
        if (window) {
            const url = new URLSearchParams(window.location.search);

            const tSource = url.get('t-source');

            if (tSource) {
                setTSource(tSource);
            }
        }
    },[]);
    
    useEffect(() => {
        if (tSource) {
            switch (tSource) {
            case 'prueba':
                setNumberCall(() => '(01) 1234567');
                break;
            
            default:
                setNumberCall(() => '(01) 6806775');
                break;
            }
        }
    },[tSource]);

  return (
    <header
      className='
        grid
        grid-cols-2
        gap-60
        w-full
        max-md:h-30
        max-md:block
        max-md:m-auto
        md:h-24
        bg-slate-100
      '
    >
      <div
        className='
          w-auto
          max-md:h-12
          md:h-16
        '
      >
        <img
          src={ `${logo}` }
          alt='logo win'
          className='
            w-auto
            h-full
            object-contain
            my-1
            mx-5
          max-md:mx-auto
          max-md:my-3

          '
        />
      </div>
      <div
        className='
          grid
          grid-cols-2
          gap-0
          justify-center
          items-center
          lg:text-4xl

          font-bold
          max-md:mt-3

        '
      >
        <span className='mx-5 
        text-right
        lg:text-2xl
        max-md:text-3xl
        '>
          Llámanos al
        </span>
    <div className='
        flex
        h-full
        items-center
        bg-[#ff5a0a]           
        text-white            
        hover:bg-[#CC4B0E]
        hover:cursor-pointer
        duration-300
        ease-linear
        max-md:text-3xl

          '>
    <span className='m-5'
        >
          { numberCall }
        </span>
    </div>
      </div>
    </header>
  )
};

export default Header;
