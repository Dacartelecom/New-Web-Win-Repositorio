'use client'
import { ModalProps } from '../interfaces/ModalProps'
import  { FC } from 'react'
import './Global.css'

const Modal: FC<ModalProps> = ({
  children,
  active,
  onClick
}) => {
  return (
    <div
      className={`
        modal
        ${ active ? 'active' : '' }
        w-screen
        h-screen
        top-0
        right-0
        fixed
        inset-0
        flex
        items-center
        justify-center
        z-100
        transform
        transition-all
        duration-300
      `}
    >
      <div
        onClick={ onClick }
        className='
          w-screen
          h-screen
          fixed
          inset-0
          bg-gray-800
          opacity-75
          z-25
        '
      ></div>
      { children }
    </div>
  )
};

export default Modal;
