/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
'use client'
import  { useEffect, useState } from 'react';
import Carrousel from "../components/Carrousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { CSSProperties } from "react";
import imageMobil1 from '../../public/WinPortadaCel1.webp';
import imageMobil2 from '../../public/WinPortadaCel2.webp';
import imageMobil3 from '../../public/WinPortadaCel3.webp';
import imageMobil4 from '../../public/WinPortadaCel4.webp';
import imageMobil5 from '../../public/WinPortadaCel5.webp';
import imageDesktop1 from '../../public/WinPortada1.webp';
import imageDesktop2 from '../../public/WinPortada2.webp';
import imageDesktop3 from '../../public/WinPortada3.webp';
import imageDesktop4 from '../../public/WinPortada4.webp';
import imageDesktop5 from '../../public/WinPortada5.webp';
import Form from "../components/Form";
import './Global.css'

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT= 5;

const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {
  height: '640px',
};
const STYLES_DESKTOP: CSSProperties = {
  aspectRatio: 3.095,
};

export const imagesMobile = [

  `${imageMobil1}`,
  `${imageMobil2}`,
  `${imageMobil3}`,
  `${imageMobil5}`,
  `${imageMobil4}`,

];

export const imagesDesktop = [

  `${imageDesktop1}`,
  `${imageDesktop2}`,
  `${imageDesktop3}`,
  `${imageDesktop5}`,
  `${imageDesktop4}`,

];


const BodyCarrouselAndForm = () => {
  const [inputState, setInputState] = useState<string>('');
  const [tSource, setTSource] = useState<string>('');
  const [error, setError] = useState<string>('');


  const interval = (error:string) => {
    setError(error)
    setTimeout(() => {
      setError('')
    }, 3000);
  }
  
  
  const setNumber = (e: any) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 9) {
        setInputState((_prev) => (value))
      } else {
        setInputState((prev) => (prev))
      }
    }
  };
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
          setInputState(() => '(01) 6806775');
          break;
        case '02winperu':
          setInputState(() => '(01) 7540488');
          break;
  
        default:
          setInputState(() => '(01) 6806774');
          break;
      }
    }
  }, [tSource]);

  const sendNumber = (e: any) => {
    e.preventDefault();

    const wsDataA = new URLSearchParams();

    // wsDataA.append("service", "callmeWinPeru1");
    // wsDataA.append("username", "dacarEs");
    // wsDataA.append("password", "jAcXDq35DJLBWfMzTxGG");

    if (tSource == '01winperu') {
      wsDataA.append("service", "callmeWinPeru1");
    } else if (tSource == '02winperu') {
      wsDataA.append("service", "callmeWinPeru2");
    } else{
      wsDataA.append("service", "callmeWinPeru");
    }
    wsDataA.append("username", "dacarEs");
    wsDataA.append("password", "jAcXDq35DJLBWfMzTxGG");
    wsDataA.append("telephone", inputState);
    wsDataA.append("ip", "127.0.0.1");
    wsDataA.append("tsource", tSource);
    const leadUrlA = "https://ws-dacar-ica.octopus-latam.com/?" + wsDataA.toString();

    fetch(leadUrlA)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((response) => {
        console.log(response);
        console.log(leadUrlA);
        if (response.status === 'ERROR') {
          interval('Estimado cliente el número debe tener 9 dígitos o esta mal colocado.')
        } else {
          interval('En breve un asesor se pondrá en contacto contigo para resolver tus dudas. Gracias')
        }
        setInputState(() => (''));
      });
  };

  return (
    <div
        className="
          relative
        "
      >
        <Carrousel
          classNameSlide="embla__slide"
          slides={ SLIDES }
          images={ imagesMobile } 
          options={ OPTIONS }
          haveButtons={ true }
          haveDots={ true }
          styles={ STYLES_MOBILE }
          className="mobile"
          interval={ 5000 }
          colorButtons='text-white'
        />
        <Carrousel
          classNameSlide="embla__slide"
          slides={ SLIDES }
          images={ imagesDesktop }
          options={ OPTIONS }
          haveButtons={ true }
          haveDots={ true }
          styles={ STYLES_DESKTOP }
          className="desktop"
          interval={ 5000 }
          colorButtons='text-white'
        />
        <Form
          className="
            max-md:relative
            md:top-[calc(50%-150px)]
            md:right-[5%]
            lg:absolute
            max-w-[340px]
            max-h-[320px]
          "
          id='number-form'
          inputState={ inputState }
          inputChange={ setNumber }
          onClick={ sendNumber }
          error={error}
        >
          <>
            <span
              className="
                    font-medium
                    max-md:text-lg
                    max-xl:text-sm
                    xl:text-lg
                    rebote
                    "
            >
              ¡Déjanos tu número y nos pondremos en contacto!
            </span>
            <span
              className="
                    font-bold
                  text-[#ff5a0a]
                    max-md:text-4xl
                    max-xl:text-3xl
                    xl:text-4xl
                  "
            >
              ¡CONTRATA WIN!
            </span>
          </>
        </Form>
      </div>
  )
};

export default BodyCarrouselAndForm;
