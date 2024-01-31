'use client'
import { ButtonProps } from '../interfaces/ButtonProps'
import { FC } from 'react'
import './Global.css'
const Button: FC<ButtonProps> = ({
  text,
  disabled,
  onClick
}) => {
  return (
    <button
      onClick={ onClick }
      className={`w-auto
      bg-[#ff5a0a]
      border
      border-[#ff5a0a]
      text-slate-100
      text-xl
      font-semibold
      py-1
      px-6
      rounded-xl
      hover:text-[#ff5a0a]
      hover:bg-slate-100
      duration-500
      ease-linear 
      ${ disabled ? 'disabled' : '' }`
      
      }
      disabled={ disabled ? true :  false}
      type='submit'
    >
      { text }
    </button>
  )
}

export default Button
