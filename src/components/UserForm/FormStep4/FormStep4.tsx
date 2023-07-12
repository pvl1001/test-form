import Button from "../../../components-ui/Button/Button";
import { useFormik } from "formik";
import FormDateInput from "../../../components-ui/FormDateInput/FormDateInput";
import FormSelect from "../../../components-ui/FormSelect/FormSelect";
import FormSlot from "../../../components-ui/FormSlot/FormSlot";
import FormCallType from "../../../components-ui/FormCallType/FormCallType";
import dayjs, { Dayjs } from "dayjs";
import { TAppointment, TFormStep4, TOrder, TSelectItem, TStep } from "../../../types";
import { useContext, useEffect, useState } from "react";
import { request } from "../../../utils/request";
import { FormContext } from "../../../context/FormContext";
import { API_PATH } from "../../../utils/constants";
import utc from 'dayjs/plugin/utc'
import { validationStep4 } from "../../../utils/validations";


dayjs.extend( utc )


function FormStep4( { setStep }: {
   setStep: ( step: TStep ) => void
} ) {
   const { order, setOrder } = useContext( FormContext )
   const [ appointments, setAppointments ] = useState<TAppointment[]>( [] )
   const [ currentTimes, setCurrentTimes ] = useState<TSelectItem[]>( [] )

   const formik = useFormik<TFormStep4>( {
      initialValues: {
         appointmentDate: '',
         appointmentTime: '',
         slotTime: '',
         callType: 'video',
      },
      validationSchema: validationStep4,
      onSubmit: async ( values: TFormStep4 ) => {
         // eslint-disable-next-line
         const { appointmentTime, ...requestData } = values
         const data: TOrder = { ...order, ...requestData }
         try {
            await request.post( API_PATH.ORDERS, data )
            setOrder( data )
            setStep( 5 )
         } catch ( err: any ) {
            console.log( err )
            alert( err.message )
         }
      }
   } )

   /** Получить доступные даты */
   async function getAppointments() {
      try {
         const { data } = await request<TAppointment[]>( API_PATH.APPOINTMENTS )
         setAppointments( data )
      } catch ( err: any ) {
         console.log( err )
         alert( err.message )
      }
   }

   /** Записать options для select времени */
   function setSelectTimeItems( appointments: TAppointment[], selectDate: Dayjs ) {
      const times = appointments.reduce( ( acc: TSelectItem[], ap ) => {
         const date = dayjs( selectDate ).format( 'YYYY-MM-DD' )
         if ( ap.includes( date ) ) {
            const rangeTime = dayjs.utc( ap ).add( 30, 'm' )
            const value = `${ dayjs.utc( ap ).format( 'hh:mm' ) } to ${ rangeTime.format( 'hh:mm a' ) }`
            acc.push( { title: value, value: ap } )
         }
         return acc
      }, [] )
      setCurrentTimes( times )
   }

   /** Заблокировать недоступные даты */
   function shouldDisableDate( date: Dayjs | string ) {
      const dateWithFormat = dayjs( date ).format( 'YYYY-MM-DD' )
      const dates = appointments.map( el => el.split( ' ' )[0] )
      return !dates.includes( dateWithFormat )
   }

   /** Выбор даты */
   function onChangeDateHandler( date: Dayjs ) {
      if ( formik.values.appointmentTime ) formik.setFieldValue( 'appointmentTime', '' )
      formik.setFieldValue( 'appointmentDate', date )
      setSelectTimeItems( appointments, date )
   }

   useEffect( () => {
      getAppointments()
   }, [] )


   return (
      <form onSubmit={ formik.handleSubmit }>

         <h2 className={ 'form-title' }>Schedule an appointment</h2>

         <FormDateInput
            name={ 'appointmentDate' }
            label={ 'Select date' }
            placeholder={ 'November 14, 2020' }
            error={ formik.errors.appointmentDate }
            disablePast
            shouldDisableDate={ shouldDisableDate }
            onChange={ onChangeDateHandler }
         />

         <FormSelect
            name={ 'appointmentTime' }
            label={ 'Select time' }
            handleChange={ formik.handleChange }
            value={ formik.values.appointmentTime }
            items={ currentTimes }
            disabled={ !formik.values.appointmentDate }
         />

         { formik.values.appointmentTime &&
            <>
               <FormSlot
                  label={ 'Choose a slot' }
                  appointmentTimeValue={ formik.values.appointmentTime }
                  value={ formik.values.slotTime }
                  onChange={ e => formik.setFieldValue( 'slotTime', e.target.value ) }
               />
               <FormCallType
                  label={ 'Call type' }
                  value={ formik.values.callType }
                  onChange={ e => formik.setFieldValue( 'callType', e.target.value ) }
               />
            </> }


         <Button
            type={ 'submit' }
            disabled={ !( formik.dirty && formik.isValid ) }
         >
            Next
         </Button>
      </form>
   )
}


export default FormStep4;