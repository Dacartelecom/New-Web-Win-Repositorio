'use client'
import { useEffect, useState } from 'react';
import logoWhite from '../../public/win_logo_white.png';
import agora from '../../public/agoraB.png';
import './Footer.css'

const Footer = () => {
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
<div className='Container'>
    <div className='container-footer'>
    <div className='footer-links'>
      <div className='Logo-header-footer'>
          <img src={logoWhite} alt="" />
      </div>
      {/*
      
<span
          className='
            text-slate-100
            max-md:text-lg
            md:text-4xl
            w-40
          '
        >
          <div className='text-sm  max-md:text-xs '>
          <a href="#"> Terminos y condiciones</a>
          <br/>
          <a href="#">politicas de privacidad</a>
          </div>
        </span> 
</div> */}
      <div className='number-header-footer'>
       <ul>
        <li><h2>Llámanos al</h2></li>
        <li><a href="#">123 456 789</a></li>
       </ul>

      </div>

      <div className='condiciones-footer'>
        <ul className='links-terminos-politicas'>
          <li><span  className='terminos-condiciones'>Términos y Condiciones de la Web</span></li>
          <li><span  className='terminos-condiciones'>Políticas de privacidad</span></li>
        </ul>
      </div>
    </div>

      <div className='line'>
        <hr />
        Distribuidor Autorizado de WIN
      </div>
    </div>
</div>



  )
};

export default Footer;