'use client'
import  { FC } from "react";
import Button from "./Button";
import { FormProps } from "../interfaces/FormProps";

const Form: FC<FormProps> = ({
  className,
  id,
  children,
  inputState,
  inputChange,
  onClick
}) => {
  return (
    <form
      className={`
        ${ className }
        bg-slate-100
        grid
        grid-rows-[auto_auto_auto]
        gap-6
        text-center
        rounded-xl
        shadow-2xl
        items-center
        justify-center
        max-lg:m-auto
        max-md:p-6
        md:p-4
      `}
    >
      <label
        htmlFor={ id }
        className="
              grid
              grid-rows-[repeat(2,auto)]
              gap-2
            "
      >
        { children }
      </label>
      <div
        className="
          flex
          items-center
          justify-center
        "
      >
        <input
          id={ id }
          type="number"
          placeholder="ingresa tu numero"
          value={ inputState }
          onChange={ inputChange }
          className="
                appearance-none
                text-center
                placeholder-center
                py-1
                px-2
                rounded-lg
                border-2
                border-[#ff5a0a]
                focus:outline-none
                focus:border-[#ff5a0a]
              "
        />
      </div>
      <div
        className="
          flex
          items-center
          justify-center
        "
      >
        <Button
          text={"Envíanos tu número"}
          onClick={ onClick }
        />
      </div>
    </form>
  );
};

export default Form;
