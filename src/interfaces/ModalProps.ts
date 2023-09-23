import { ReactElement } from "react";

export interface ModalProps {
  children: ReactElement
  active: boolean
  onClick: (e: any) => void
}