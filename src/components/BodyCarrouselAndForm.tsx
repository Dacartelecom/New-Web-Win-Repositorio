/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
'use client'
import  { useEffect, useState } from 'react';
import Carrousel from "../components/Carrousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { CSSProperties } from "react";
import Form from "../components/Form";
import './Global.css'

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT= 6;

const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {
  height: '640px',
};
const STYLES_DESKTOP: CSSProperties = {
  aspectRatio: 3.095,
};

export const imagesMobile = [
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/1%20win-MOVIL-banner-landing-tu-fibra-100_.webp?alt=media&token=2bde54fc-c39a-4a6a-a35d-b01261c50f6f",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/2%20BANNER-WIN-MOVIL-trio-L1max.webp?alt=media&token=dd4356c6-c9a8-4b7d-8bf0-b796d645f722",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/3%20BANNER-WIN-MOVIL-trio.webp?alt=media&token=1f198b88-ab6d-4699-ae0d-cc111c391b37",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/4%20BANNER-WIN-MOVIL-duo.webp?alt=media&token=10252a36-eab3-4378-9c1e-39092a03282c",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/5%20BANNER-WIN-MOVIL-gammer-duo.webp?alt=media&token=8327e637-4e6a-4280-8694-e7fa39628ccf",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/WinPortadaCel12.webp?alt=media&token=420c8fc8-1b3a-4eab-a8bd-535ca42e21fb",
];

export const imagesDesktop = [
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/1%20win-banner-landing-tu-fibra-100_.webp?alt=media&token=c26f8039-da4b-4b35-a18f-3d7263be96be",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/2%20BANNER-WIN-trio-L1max.webp?alt=media&token=78141224-8277-40ad-8327-c2b2150df45a",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/3%20BANNER-WIN--trio.webp?alt=media&token=47c7c671-55d1-4c93-be81-f2183ca52cdb",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/4%20BANNER-WIN-duo.webp?alt=media&token=8c4ee0e8-253b-4611-9f4c-afc1ec83fd05",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/5%20BANNER-WIN-gammer-duo.webp?alt=media&token=8a4cde9c-2c3f-4d29-8ee3-146ffda11d06",
  "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/WinPortada12.webp?alt=media&token=760e0849-71a9-4cee-ac8b-299f867de11f",
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
