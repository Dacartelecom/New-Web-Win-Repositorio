'use client';
import  { FC, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { CarrouselProps } from '../interfaces/CarouselProps';
import imageByIndex from '../utils/ImageByIndex';
import { NextButton, PrevButton } from './ArrowButtons';
import { DotButton } from './DotButton';

const Carrousel: FC<CarrouselProps> = ({
  slides,
  options,
  haveButtons,
  haveDots,
  styles,
  images,
  className,
  interval,
  classNameSlide,
  childrens,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [intervalTime, setIntervalTime] = useState(interval)

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  }, [emblaApi])
  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    // console.log(emblaApi.slidesInView(), 'init')
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    // console.log(emblaApi.slidesInView(), 'select')
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      if (intervalTime) {
        setInterval(() => {
          emblaApi.scrollNext();
        }, intervalTime);
      }
    }
  }, [emblaApi]);

  return (
    <div
      className={`
        relative
        ${ className }
      `}
    >
      <div className="embla">
        <div
          className="embla__viewport"
          ref={emblaRef}
        >
          <div
            className="embla__container"
          >
            {slides.map((index) => (
              <div
                className={ classNameSlide }
                key={index}
              >
                {
                  childrens &&
                  childrens[index]
                }
                {
                  images &&
                  <img
                    className="embla__slide_img"
                    style={ styles }
                    src={`${imageByIndex(index, images)}`}
                    alt="Your alt text"
                  />
                }
              </div>
            ))}
          </div>
        </div>

        {
          haveButtons &&
          <>
            <PrevButton
              onClick={scrollPrev}
              enabled={prevBtnEnabled}
            />
            <NextButton
              onClick={scrollNext}
              enabled={nextBtnEnabled}
            />
          </>
        }
      </div>
      {
        haveDots &&
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default Carrousel
