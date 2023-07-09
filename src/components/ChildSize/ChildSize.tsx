import s from "./ChildSize.module.scss";
import { TFieldDataChildSize } from "../../types";
import FormInput from "../../components-ui/FormInput/FormInput";
import FormSelect from "../../components-ui/FormSelect/FormSelect";
import regexNumber from "../../utils/regexNumber";
import { SelectProps } from "@mui/material/Select/Select";


function ChildSize( { fieldData, handleChange, setFieldValue }: {
   fieldData: TFieldDataChildSize
   handleChange: ( e: SelectProps ) => void
   setFieldValue: ( name: string, value: string ) => void
} ) {
   const { weight, weightUnit, height, heightUnit } = fieldData

   return (
      <div className={ s._ }>
         <FormInput
            name={ 'weight' }
            value={ weight.value }
            label={ 'Child\'s weight' }
            handleChange={ e => setFieldValue( 'weight', regexNumber( e.target.value ) ) }
         />

         <FormSelect
            label={ 'Weight unit' }
            name={ 'weightUnit' }
            value={ weightUnit.value }
            handleChange={ handleChange }
            items={ [
               { title: 'kg', value: 'kg' },
               { title: 'mg', value: 'mg' },
            ] }
         />

         <FormInput
            name={ 'height' }
            value={ height.value }
            label={ 'Child\'s height' }
            handleChange={ e => setFieldValue( 'height', regexNumber( e.target.value ) ) }

         />

         <FormSelect
            label={ 'Height unit' }
            name={ 'heightUnit' }
            value={ heightUnit.value }
            handleChange={ handleChange }
            items={ [
               { title: 'cm', value: 'cm' },
               { title: 'm', value: 'm' },
            ] }
         />
      </div>
   )
}


export default ChildSize;