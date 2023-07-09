import s from "./FormStep1/FormStep1.module.scss";
import { ReactNode } from "react";
import Button from "../../components-ui/Button/Button";


function Form( { children, title, disabled, onSubmit }: {
   children: ReactNode
   title: string
   disabled?: boolean
   onSubmit: () => void
} ) {
   return (
      <form onSubmit={ onSubmit }>
         <h2 className={ s.title }>{ title }</h2>

         { children }

         <Button
            type={ 'submit' }
            className={ s.btn_submit }
            disabled={ disabled }
         >
            Next
         </Button>
      </form>
   )
}


export default Form;