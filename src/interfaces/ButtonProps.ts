export interface ButtonProps {
  text: string
  type?:"button" | "reset" | "submit" | undefined
  disabled?:boolean
  onClick?: (e: any) => void
}