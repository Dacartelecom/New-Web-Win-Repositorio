import React from "react";
import { DotButtonPropType } from "../interfaces/DotButtonProps";

export const DotButton: React.FC<DotButtonPropType> = ({
  selected,
  onClick
}) => {

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  )
}