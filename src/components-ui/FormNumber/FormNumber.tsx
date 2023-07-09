import s from './FormNumber.module.scss';
import { FormControl, TextField } from "@mui/material";
import { BaseTextFieldProps } from "@mui/material/TextField/TextField";
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-input.svg';


interface IProps extends BaseTextFieldProps {
   value: number
   label: string
   name: string
   setFieldValue: ( name: string, value: number ) => void
   min: number
   max: number
}

function FormNumber( { value, name, label, fullWidth, setFieldValue, min, max }: IProps ) {
   const increment = () => setFieldValue( name, value < max ? ++value : value )
   const decrement = () => setFieldValue( name, value > min ? --value : value )

   return (
      <div>
         <label className="input-label">{ label }</label>

         <FormControl fullWidth={ fullWidth }>

            <TextField value={ value }/>

            <div className={ s.btns }>
               <button
                  type="button"
                  className={ s.arrow_increment }
                  onClick={ increment }
               >
                  <ArrowIcon/></button>
               <button
                  type="button"
                  onClick={ decrement }
               >
                  <ArrowIcon/></button>
            </div>

         </FormControl>
      </div>

   )
}


export default FormNumber;