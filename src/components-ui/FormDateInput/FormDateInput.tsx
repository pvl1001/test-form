import { FormControl, TextField } from "@mui/material";
import { DesktopDatePicker, DesktopDatePickerProps } from "@mui/x-date-pickers";
import { DATE_FORMAT } from "../../utils/constants";
import { FormikProps, FormikValues } from "formik";
import { Dayjs } from "dayjs";


function FormDateInput<F>( { name, formik, label, ...rest }: {
   name: string
   label: string
   formik: FormikProps<F>
} & Partial<DesktopDatePickerProps<any, any>> ) {
   return (
      <FormControl fullWidth>
         <label className="input-label">{ label }</label>
         <DesktopDatePicker
            inputFormat={ DATE_FORMAT }
            value={ ( formik.values as FormikValues )[name] }
            onChange={ ( date: Dayjs ) => formik.setFieldValue( name, date?.format( DATE_FORMAT ) ?? '' ) }
            { ...rest }
            renderInput={ ( params ) =>
               <TextField
                  name={ name }
                  onBlur={ formik.handleBlur }
                  helperText={ ( formik.touched as any )[name] && ( formik.errors as any )[name] }
                  { ...params }
                  error={ ( formik.touched as any )[name] && !!( formik.errors as any )[name] }
               />
            }
         />
      </FormControl>
   )
}


export default FormDateInput;