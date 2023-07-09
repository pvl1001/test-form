import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.scss";


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
   type?: 'button' | 'submit'
   className?: string
}

function Button( { children, type = 'button', className = '', ...rest }: IProps ) {
   return (
      <button
         type={ type }
         className={ `${ s._ } ${ className }` }
         { ...rest }
      >{ children }</button>
   )
}


export default Button;