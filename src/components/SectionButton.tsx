import { SectionButtonProps } from '../interfaces/SectionButtonProps'
import  { FC } from 'react'

const SectionButton: FC<SectionButtonProps> = ({
  text,
  selected,
  onClick
}) => {
  return (
    <button
      onClick={ onClick }
      className={`
        section-button
        ${ selected ? 'selected' : '' }
        appearance-none
        w-full
        py-4
        bg-slate-100
        border
        border-[#ff5a0a]
        text-[#ff5a0a]
        hover:text-white
        hover:bg-[#ff5a0a]
        max-md:rounded-md
        duration-500
        ease-linear
      `}
    >
      <span
        className='
          font-bold
          max-md:text-2xl
          max-xl:text-2xl
          xl:text-3xl
        '
      >
        { text }
      </span>
    </button>
  )
}

export default SectionButton
