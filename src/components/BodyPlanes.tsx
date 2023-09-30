'use client'
import { FC } from 'react'
import Button from './Button'
import { BodyPlanesProps } from '../interfaces/BodyPlanesProps'
import PlusIcon from './PlusIcon';

const BodyPlanes: FC<BodyPlanesProps> = ({
  title,
  stylesMbps,
  mbps,
  mbpsLast,
  aditional,
  stylesPrice,
  price,
  promo,
  img,
  timePromo,
  regularPrice,
  regularPrice2,
  imgs,
  onClick
}) => {
  return (
    <div
      className='
        grid
        w-200
        grid-rows-[repeat(10,auto)]
        gap-2
        items-start
        justify-center
        px-11
        py-1
        text-center
      '
    >
      <span
        className='
          text-[#ff5a0a]
          font-bold
        '
      >
        { title }
      </span>
      <span
        style={ stylesMbps }
        className='
          font-bold
          text-5xl
        '
      >
        { mbps } Mbps
      </span>
      { mbpsLast &&
        <p
          className='
            line-through
            text-[#301D19]
            font-bold
            text-xl
          '
          style={{
            textDecorationColor: '#ff5a0a',
          }}
        >
          { mbpsLast } Mbps
        </p>
      }
      {
        promo &&
        <span
          className='
            text-[#301D19]
            font-bold
            text-lg
          '
        >
          { promo }
        </span>
      }
      {
        img &&
        <div
          className='
            flex
            flex-col
            items-center
            justify-center
            w-30
            m-auto
          '
        >
          <PlusIcon
            className='
              pb-4
            '
          />
          <img
            src={ img.img }
            alt={ img.text }
            className='
              w-20
            '
          />
        </div>
      }
      <div
        className={`
          relative
          flex
          items-center
          justify-center
          ${ aditional && 'py-3' }
        `}
      >
        <p
          style={ stylesPrice }
          className='
            border
            text-slate-100
            text-xl
            font-semibold
            py-1
            px-6
            rounded-xl
          '
        >
          S/{ price } al mes
        </p>
        {
          aditional &&
          <span
            className='
              absolute
              bg-[#301D19]
              text-slate-100
              font-semibold
              text-sm
              py-1
              px-3
              rounded
              top-[-7px]
              right-0
            '
          >
            { aditional }
          </span>
        }
      </div>
      <span
        className='
          text-[#ff5a0a]
          font-bold
        '
      >
        { timePromo }
      </span>
      <span
        className='
          text-[#301D19]
          font-bold
        '
      >
        { regularPrice2 }
      </span>
      <span
        className='
          text-[#301D19]
          font-bold
        '
      >
        Precio regular S/{ regularPrice }
      </span>
      <Button
        text={'Quiero este plan'}
        onClick={ onClick }
      />
      {
        imgs &&
        <div
          className='
            grid
            grid-cols-3
            items-center
            justify-center
          '
        >
          {
            imgs.map((item, index) => (
              <div
                key={ index }
                className='
                  w-24
                  flex
                  flex-col
                  items-center
                  justify-center
                  m-auto
                '
              >
                <img
                  src={ item.img }
                  alt='alt image'
                  className='w-auto h-6'
                />
                <span
                  className='
                    m-1
                    text-center
                    text-xs
                    text-[#000000]
                  '
                >
                  { item.text }
                </span>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default BodyPlanes;
