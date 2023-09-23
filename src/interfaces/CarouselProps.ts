import { EmblaOptionsType } from "embla-carousel-react"
import { CSSProperties } from "react"


export interface CarrouselProps {
  slides: number[]
  images?: string[]
  options?: EmblaOptionsType
  haveButtons?: boolean
  haveDots?: boolean
  styles?: CSSProperties
  className?: string
  interval: number
  classNameSlide: string
  childrens?: JSX.Element[]
}