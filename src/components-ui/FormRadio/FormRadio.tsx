import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent } from "react";
import s from './FormRadio.module.scss';


function FormRadio( { name, label, items, value, handleChange }: {
   label: string
   value: string | number | boolean
   name: string
   items: Array<{
      label: string
      value: string | number | boolean
   }>
   handleChange: ( e: ChangeEvent<HTMLInputElement> ) => void
} ) {


   return (
      <div>
         <FormControl>
            <label className="input-label m-0">{ label }</label>

            <RadioGroup
               aria-labelledby="radio-buttons-group-label"
               value={ value }
               name={ name }
               onChange={ handleChange }
            >
               { items.map( item =>
                  <FormControlLabel
                     key={ item.label }
                     label={ item.label }
                     value={ item.value }
                     classes={ { label: s.radio_label } }
                     control={ <Radio sx={ {
                        '&.Mui-checked': { color: 'var(--fiolet)' },
                        '& .MuiSvgIcon-root': { fontSize: 32 },
                     } }/> }
                  />
               ) }
            </RadioGroup>
         </FormControl>
      </div>
   )
}


export default FormRadio;