import s from './FormSelect.module.scss';
import { FormControl, MenuItem, Select } from "@mui/material";
import { SelectProps } from "@mui/material/Select/Select";
import { TSelectItem } from "../../types";


interface IProps extends SelectProps {
   name: string
   label?: string
   handleChange: ( e: SelectProps ) => void
   items: TSelectItem[]
}

function FormSelect( { label, handleChange, items, fullWidth, ...rest }: IProps ) {

   return (
      <FormControl fullWidth={ fullWidth }>

         { label && <label className="input-label">{ label }</label> }

         <Select onChange={ handleChange } { ...rest }>
            { items.map( ( item ) =>
               <MenuItem
                  key={ item.title }
                  value={ item.value }
               >
                  <div className={ s.option }>{ item.icon && item.icon }{ item.title }</div>
               </MenuItem>
            ) }
         </Select>

      </FormControl>
   )
}


export default FormSelect;