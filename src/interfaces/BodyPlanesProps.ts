import { CSSProperties } from "react"

interface img {
  img: string
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
  regularPrice2?: string
  imgs?: img[]
  onClick: (e: any) => void
}