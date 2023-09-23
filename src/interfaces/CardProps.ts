import { CSSProperties, ReactElement } from "react"

export interface CardProps {
  title: string
  children: ReactElement
  styles: CSSProperties
}