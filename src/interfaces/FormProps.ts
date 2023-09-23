import { ReactElement } from "react";

export interface FormProps {
  className: string
  id: string
  error?:string
  children: ReactElement
  inputState: string
  inputChange: (e: any) => void
  onClick: (e: any) => void
}