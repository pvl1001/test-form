import { FormControl } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { DATE_FORMAT } from "../../utils/constants";


interface IProps extends DatePickerProps<any> {
   label: string
   placeholder?: string
   name: string
   error?: string
}

function FormDateInput( { label, placeholder, error, ...rest }: IProps ) {
   return (
      <FormControl fullWidth>
         <label className="input-label">{ label }</label>
         <DatePicker
            format={ DATE_FORMAT }
            slotProps={ {
               textField: {
                  error: !!error,
                  helperText: error,
                  placeholder,
               }
            } }
            { ...rest }
         />
      </FormControl>
   )
}


export default FormDateInput;