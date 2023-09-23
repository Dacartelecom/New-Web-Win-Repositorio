'use client'
import  { useState } from 'react';
import Carrousel from "../components/Carrousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { CSSProperties } from "react";
import imageMobil1 from '../../public/WinPortadaCel.webp';
import imageMobil2 from '../../public/WinPortadaCel1.webp';
import imageMobil3 from '../../public/WinPortadaCel2.webp';
import imageMobil4 from '../../public/WinPortadaCel3.webp';
import imageMobil5 from '../../public/WinPortadaCel4.webp';
import imageDesktop1 from '../../public/WinPortada.webp';
import imageDesktop2 from '../../public/WinPortada1.webp';
import imageDesktop3 from '../../public/WinPortada2.webp';
import imageDesktop4 from '../../public/WinPortada3.webp';
import imageDesktop5 from '../../public/WinPortada4.webp';
import Form from "../components/Form";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT= 5;

const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {
  height: '640px'
};
const STYLES_DESKTOP: CSSProperties = {
  aspectRatio: 3.095
};

export const imagesMobile = [
  imageMobil1,
  imageMobil2,
  imageMobil3,
  imageMobil4,
  imageMobil5
];

export const imagesDesktop = [
  imageDesktop1,
  imageDesktop2,
  imageDesktop3,
  imageDesktop4,
  imageDesktop5
];

const BodyCarrouselAndForm = () => {
  const [inputState, setInputState] = useState<string>('');

  const setNumber = (e: any) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 9) {
        setInputState((prev) => (value))
      } else {
        setInputState((prev) => (prev))
      }
    }
  };

  const sendNumber = (e: any) => {
    e.preventDefault();

    const wsDataA = new URLSearchParams();

    // wsDataA.append("service", "callmeWinPeru1");
    // wsDataA.append("username", "dacarEs");
    // wsDataA.append("password", "jAcXDq35DJLBWfMzTxGG");

    wsDataA.append("service", "PeruHfcCallme");
    wsDataA.append("username", "dacar");
    wsDataA.append("password", "StzsK46vs0a4nCJU55wD");
    wsDataA.append("telephone", inputState);
    wsDataA.append("ip", "127.0.0.1");

    const leadUrlA = "https://ws-dacar-ica.octopus-latam.com/?" + wsDataA.toString();

    fetch(leadUrlA)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((response) => {
        console.log(response);
        console.log(leadUrlA);

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
        />
        <Form
          className="
            max-md:relative
            md:top-[calc(50%-130px)]
            md:right-[5%]
            lg:absolute
            max-w-[340px]
            max-h-[320px]
          "
          id='number-form'
          inputState={ inputState }
          inputChange={ setNumber }
          onClick={ sendNumber }
        >
          <>
            <span
              className="
                    font-medium
                    max-md:text-lg
                    max-xl:text-sm
                    xl:text-lg
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
              !CONTRATA WIN¡
            </span>
          </>
        </Form>
      </div>
  )
};

export default BodyCarrouselAndForm;
