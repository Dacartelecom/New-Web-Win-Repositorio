import { CSSProperties } from "react"

interface img {
  img: any
  text: string
}

export interface BodyPlanesProps {
  title: string
  stylesMbps: CSSProperties
  mbps: number
  mbpsLast?: number
  promo?: string
  img?: img
  aditional?: string
  stylesPrice: CSSProperties
  price: number
  timePromo: string
  regularPrice: number
  imgs?: img[]
  onClick: (e: any) => void
}