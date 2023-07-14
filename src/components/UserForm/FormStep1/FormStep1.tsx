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
import { TFormStep1, TOrdersContext, TStep } from "../../../types";
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
   const { order, setOrder } = useContext<TOrdersContext>( FormContext )
   const formik = useFormik<TFormStep1>( {
      initialValues: {
         name: order.name || '',
         birthDate: order.birthDate,
         isShowBornWeek: order.isShowBornWeek || 0,
         bornWeek: order.bornWeek || 20,
         weight: order.weight || '',
         height: order.height || '',
         weightUnit: order.weightUnit || 'kg',
         heightUnit: order.heightUnit || 'cm',
         email: order.email || '',
         phoneCode: order.phoneCode || '+91',
         phoneNumber: order.phoneNumber || ''
      },
      validationSchema: validationStep1,
      onSubmit: async ( values: TFormStep1 ) => {
         setOrder( { ...values, isValidStep1: true } )
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
            defaultValue={ formik.values.birthDate }
            onChange={ ( date: Dayjs ) => formik.setFieldValue( 'birthDate', date )
            }
         />

         <FormRadio
            label={ 'Born at less than 37 weeks?' }
            name={ 'isShowBornWeek' }
            value={ formik.values.isShowBornWeek as number }
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
            disabled={ !( ( formik.dirty || order.isValidStep1 ) && formik.isValid ) }
         >
            Next
         </Button>

      </form>
   )
}


export default FormStep1;