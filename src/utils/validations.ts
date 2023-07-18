import * as yup from "yup";
import { string } from "yup";
import dayjs from "dayjs";


export const validationStep1 = yup.object( {
   name: yup.string().min( 3 ).required(),
   birthDate: yup.date().max( dayjs().subtract( 1, 'day' ).format( 'YYYY-MM-DD' ) ).required(),
   email: yup.string().email( 'email must match the following: example@gmail.com' ).required(),
   phoneNumber: string()
      .min( 12, 'number must be at least 10 characters' )
      .max( 12, 'number must be at least 10 characters' )
      .required( 'phone number is a required field' ),
} )

export const validationStep4 = ( shouldDisableDate: ( date?: Date ) => boolean ) => yup.object( {
   appointmentDate: yup.date().test( 'appointmentDate', ( date ) => !shouldDisableDate( date ) ).required(),
   appointmentTime: yup.string().required(),
   slotTime: yup.string().required()
} )