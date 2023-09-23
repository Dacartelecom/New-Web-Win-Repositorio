'use client'
import './Global.css'
import { ModalProps } from '../interfaces/ModalProps'
import  { FC } from 'react'

const Modal: FC<ModalProps> = ({
  children,
  active,
  onClick
}) => {
  return (
    <div
      className={`
        modal
        ${ active ? 'active' : 'hidden' }
        w-screen
        h-screen
        top-0
        right-0
        fixed
        inset-0
        flex
        items-center
        justify-center
        transform
        transition-all
        duration-300
        z-10
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
          z-100
        '
      ></div>
      { children }
    </div>
  )
};

export default Modal;
