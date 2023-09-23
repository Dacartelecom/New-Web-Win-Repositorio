import { CardProps } from '../interfaces/CardProps';
import  { FC } from 'react'

const Card: FC<CardProps> = ({
  title,
  children,
  styles
}) => {
  return (
    <div
      className='
        flex
        items-center
        justify-center
      '
    >
      <div
        className='
          shadow-2xl
          overflow-hidden
          rounded-2xl
          h-full
          grid
          grid-rows-[repeat(2,auto)]
          min-h-[510px]
        '
        style={ styles }
      >
        <span
          className='
            p-1
            bg-[#301D19]
            max-h-[35px]
            text-slate-100
            font-medium
            text-lg
            text-center
          '
        >
          { title }
        </span>
        <div
          className='
            flex
            items-center
            justify-center
          '
        >
          { children }
        </div>
      </div>
    </div>
  )
};

export default Card;
