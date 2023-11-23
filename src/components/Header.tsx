/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import  { useEffect, useState } from 'react';
import logo from '../../public/win_logo_white.png';
import Modal from './Modal';


const Header = () => {
    const [numberCall, setNumberCall] = useState<string>('(01) 6806774');
    const [tSource, setTSource] = useState<undefined | string>(undefined);
    const [activeModal, setActiveModal] = useState(false);

    const viewModal = () => setActiveModal((_prev) => (true));
    const closeModal = () => setActiveModal((_prev) => (false));

    useEffect(() => {
        if (window) {
            const url = new URLSearchParams(window.location.search);

            const tSource = url.get('T-source');

            if (tSource) {
                setTSource(tSource);
            }
        }
    },[]);
    
    useEffect(() => {
        if (tSource) {
            switch (tSource) {
              case '01winperu':
                setNumberCall(() => '(01) 6806775');
                break;
              case '02winperu':
                setNumberCall(() => '(01) 7540488');
                break;
            
            default:
                setNumberCall(() => '(01) 6806774');
                break;
            }
        }
    },[tSource]);

  return (
    <header
      className='
        grid
        grid-cols-3
        gap-0
        w-full
        max-md:h-29
        max-md:block
        max-md:m-auto
        bg-[#ff5a0a]           
        z-10
      '
    >
        <img
          src={ `${logo}` }
          alt='logo win'
          className='
            w-4/12
            h-auto
            object-contain
            my-2
            mx-11
          max-md:mx-auto
          max-md:w-2/5
          '
        />
        
        <div className='text-white mt-14 text-xl max-md:hidden'>WIN - AGENCIA AUTORIZADA AGORA TELECOM</div>

      <div
        className='
          block
          justify-center
          items-center
          lg:text-4xl
          font-bold
          max-md:mt-5
          text-left 
          max-md:text-center
        '
      >
    <div className='
        block
        h-full
        items-center
        text-white            
        hover:cursor-pointer
        duration-300
        ease-linear
        max-md:text-3xl
        pl-4
        py-2
          '>
    <span className=''
        >
                  <span className='mx-1 
        lg:text-3xl
        max-md:text-2xl
        '>
          Contrata WIN llamando al<br/>
        </span>
          <a href={`tel:${ numberCall }`} className='
        lg:text-6xl
        max-md:text-5xl
        max-md:mr-5'>{ numberCall }</a>
        </span>
        <br />
        <span className='
          p-1
          text-[11px]
          rounded-full  
          bg-white
          text-[#301D19]
          border-[1px]
          border-[#301D19]
          cursor-pointer 
          transition-all 
          duration-500 
          hover:bg-[#301D19]
          hover:text-white
          max-md:text-justify
          max-md:ml-[-10px]
          shadow-black
             inset-0
            shadow-inner
          '
          
          onClick={viewModal}>PARA ATENCIÓN AL CLIENTE Y/O RECLAMOS, HAZ CLIC AQUÍ</span>
    </div>
      </div>
      <Modal active={ activeModal }
        onClick={ closeModal }>
          <div className='
          bg-white 
          text-[#301D19]             
          relative
            z-1000
            max-w-[800px] text-center
            rounded-md'>
              <div className='p-8 h-auto'>
              <span className='m-3'>Teléfonos solo para atención al cliente y reclamos</span>
          <br />
          <br />
          <a href="tel:7073000" className='          
          rounded-full border 
          border-[#301D19]
          border-primary 
          cursor-pointer 
          p-2
          hover:bg-[#301D19]
          hover:text-white
          duration-300
          ease-linear
          '>707-3000</a>
              </div>
          </div>
        </Modal>
    </header>
  )
};

export default Header;
