import { ChangeEvent, useState } from "react"
import { SelectChangeEvent } from "@mui/material";


export function useForm( inputValues: Record<string, string | number> ) {
   const [ values, setValues ] = useState( inputValues )

   const setValue = ( name: string, value: number | string ) => {
      setValues( { ...values, [name]: value } )
   }

   const handleChange = ( e: ChangeEvent<HTMLInputElement> | SelectChangeEvent ) => {
      const { name, value } = e.target
      setValue( name, value )
   }


   return { values, handleChange, setValue }
}