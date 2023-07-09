import { FormControl, TextField } from "@mui/material";
import { BaseTextFieldProps } from "@mui/material/TextField/TextField";
import { ChangeEvent } from "react";


interface Props extends BaseTextFieldProps {
   label?: string
   handleChange: ( e: ChangeEvent<HTMLInputElement> ) => void
   value: string | number
}

function FormInput( { label, handleChange, fullWidth, ...rest }: Props
) {
   return (
      <FormControl fullWidth={ fullWidth }>
         { label && <label className="input-label">{ label }</label> }
         <TextField variant="outlined" onChange={ handleChange } { ...rest }/>
      </FormControl>
   )
}


export default FormInput;