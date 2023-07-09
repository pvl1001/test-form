import FormInput from "../../../components-ui/FormInput/FormInput";
import Button from "../../../components-ui/Button/Button";
import * as yup from 'yup';
import { useFormik } from "formik";
import FormDateInput from "../../../components-ui/FormDateInput/FormDateInput";
import { ChangeEvent, useContext } from "react";
import FormRadio from "../../../components-ui/FormRadio/FormRadio";
import FormNumber from "../../../components-ui/FormNumber/FormNumber";
import ChildSize from "../../ChildSize/ChildSize";
import dayjs, { Dayjs } from "dayjs";
import PhoneNumber from "../../../components-ui/PhoneNumber/PhoneNumber";
import { TFormDataWithPhone, TFormInitialStateStep1, TOrdersContext, TStep } from "../../../types";
import { FormContext } from "../../../context/FormContext";
import { validationStep1 } from "../../../utils/validations";


yup.addMethod( yup.string, 'email', function validateEmail( message ) {
   return this.matches( RegExp( '\\w+@\\w+\\.\\w+' ), {
      message,
      name: 'email',
      excludeEmptyString: true,
   } )
} )


function FormStep1( { setStep }: {
   setStep: ( step: TStep ) => void
} ) {
   const { setOrder } = useContext<TOrdersContext>( FormContext )
   const formik = useFormik<TFormInitialStateStep1>( {
      initialValues: {
         name: '',
         birthDate: '',
         isShowBornWeek: 0,
         bornWeek: 20,
         weight: '',
         height: '',
         weightUnit: 'kg',
         heightUnit: 'cm',
         email: '',
         phoneCode: '+91',
         phoneNumber: ''
      },
      validationSchema: validationStep1,
      onSubmit: async ( values: TFormInitialStateStep1 ) => {
         const {
            isShowBornWeek,
            bornWeek,
            phoneCode,
            phoneNumber,
            ...rest
         } = values
         const phone = ( phoneCode + phoneNumber ).replaceAll( ' ', '' )
         const data = isShowBornWeek === 0
            ? { ...rest, phone } as Omit<TFormDataWithPhone, 'bornWeek'>
            : { ...rest, bornWeek, phone } as TFormDataWithPhone
         setOrder( data )
         setStep( 4 )
      }
   } )


   return (
      <form onSubmit={ formik.handleSubmit }>

         <h2 className={ 'form-title' }>
            Get your questions answered by our consultants from the comfort of your home</h2>

         <FormInput
            label={ 'Child\'s name' }
            name={ 'name' }
            placeholder={ 'Alice' }
            value={ formik.values.name }
            handleChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            error={ formik.touched.name && Boolean( formik.errors.name ) }
            inputProps={ { maxLength: 20 } }
            helperText={ formik.touched.name && formik.errors.name }
         />

         <FormDateInput
            name={ 'birthDate' }
            label={ 'Child\'s date of brith' }
            placeholder={ 'November 14, 2020' }
            error={ formik.errors.birthDate }
            maxDate={ dayjs().subtract( 1, 'day' ) }
            onChange={ ( date: Dayjs ) => formik.setFieldValue( 'birthDate', date )
            }
         />

         <FormRadio
            label={ 'Born at less than 37 weeks?' }
            name={ 'isShowBornWeek' }
            defaultValue={ 0 }
            items={ [
               { label: 'No', value: 0 },
               { label: 'Yes', value: 1 },
            ] }
            handleChange={ ( e: ChangeEvent<HTMLInputElement> ) => {
               formik.setFieldValue( 'isShowBornWeek', +e.target.value )
            } }
         />

         { !!formik.values.isShowBornWeek &&
            <FormNumber
               label={ 'Born in weeks' }
               name={ 'bornWeek' }
               fullWidth
               value={ formik.values.bornWeek }
               setFieldValue={ formik.setFieldValue }
               min={ 20 }
               max={ 36 }
            />
         }

         <ChildSize
            handleChange={ formik.handleChange }
            setFieldValue={ formik.setFieldValue }
            fieldData={ {
               weight: { title: 'weight', value: formik.values.weight },
               height: { title: 'height', value: formik.values.height },
               weightUnit: { title: 'weightUnit', value: formik.values.weightUnit },
               heightUnit: { title: 'heightUnit', value: formik.values.heightUnit },
            } }
         />

         <FormInput
            label={ 'Email address' }
            name={ 'email' }
            type={ 'email' }
            value={ formik.values.email }
            placeholder={ 'james@gmail.com' }
            handleChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            error={ formik.touched.email && Boolean( formik.errors.email ) }
            helperText={ formik.touched.email && formik.errors.email }
         />

         <PhoneNumber formik={ formik }/>

         <Button
            type={ 'submit' }
            disabled={ !( formik.dirty && formik.isValid ) }
         >
            Next
         </Button>

      </form>
   )
}


export default FormStep1;