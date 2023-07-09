import * as yup from "yup";
import { string } from "yup";


export const validationStep1 = yup.object( {
   name: yup.string().min( 3 ).required(),
   birthDate: yup.string().notOneOf( [ 'Invalid Date' ], 'Invalid Date' ).required(),
   email: yup.string().email( 'email must match the following: example@gmail.com' ).required(),
   phoneNumber: string()
      .min( 12, 'number must be at least 10 characters' )
      .max( 12, 'number must be at least 10 characters' )
      .required( 'phone number is a required field' ),
} )

export const validationStep4 = yup.object( {
   appointmentDate: yup.string().notOneOf( [ 'Invalid Date' ], 'Invalid Date' ).required(),
   appointmentTime: yup.string().required(),
   slotTime: yup.string().required()
} )