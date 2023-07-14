import s from "./PhoneNumber.module.scss";
import FormSelect from "../FormSelect/FormSelect";
import FormInput from "../FormInput/FormInput";
import phoneMask from "../../utils/phoneMask";
import { ReactComponent as FlagIcon } from '../../assets/svg/flag.svg';
import { FormikProps } from "formik";
import { TFormStep1 } from "../../types";


const items = [
   { icon: <FlagIcon width={ 43 }/>, title: '+91', value: '+91' },
   { icon: <FlagIcon width={ 43 }/>, title: '+7', value: '+7' },
]


function PhoneNumber( { label = 'Phone number', formik }: {
   label?: string
   formik: FormikProps<TFormStep1>
} ) {
   return (
      <div className={ s._ }>
         <label className="input-label">{ label }</label>

         <div className={ s.row }>
            <FormSelect
               sx={ { width: 130 } }
               name={ 'phoneCode' }
               handleChange={ formik.handleChange }
               value={ formik.values.phoneCode }
               items={ items }
            />

            <FormInput
               name={ 'phoneNumber' }
               value={ formik.values.phoneNumber as string }
               handleChange={ e => formik.setFieldValue( 'phoneNumber', phoneMask( e.target.value ) ) }
               placeholder={ 'number' }
               inputProps={ { maxLength: 12 } }
               onBlur={ formik.handleBlur }
               error={ formik.touched.phoneNumber && Boolean( formik.errors.phoneNumber ) }
               helperText={ formik.touched.phoneNumber && formik.errors.phoneNumber }
            />
         </div>

      </div>
   )
}


export default PhoneNumber;