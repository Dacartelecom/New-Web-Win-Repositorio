import { SubSectionButtonProps } from '../interfaces/SubSectionButtonProps'
import  { FC } from 'react'

const SubSectionButton: FC<SubSectionButtonProps> = ({
  text,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={ onClick }
      className={`
        sub-section-button
        ${ selected ? 'selected' : '' }
        appearance-none
        w-full
        p-4
        bg-[#301D19]
        text-white
        border-[#ff5a0a]
        hover:bg-[#26aae1]
        hover:text-slate-100
        duration-500
        ease-linear
        border
      `}
    >
      <span
        className='
          font-semibold
          text-base
        '
      >
        { text }
      </span>
    </button>
  )
};

export default SubSectionButton;
