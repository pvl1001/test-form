import s from "./FormSlot.module.scss";
import { ChangeEvent } from "react";
import dayjs from "dayjs";


function FormSlot( { label, value, name, appointmentTimeValue, onChange }: {
   label: string
   value: string
   name: string
   appointmentTimeValue: string
   onChange: ( e: ChangeEvent<HTMLInputElement> ) => void
} ) {

   const start = dayjs.utc( appointmentTimeValue ).format( 'hh:mm' )
   const second = dayjs.utc( appointmentTimeValue ).add( 15, 'm' )
   const end = dayjs.utc( appointmentTimeValue ).add( 30, 'm' )

   return (
      <div className={ s._ }>
         <label className="input-label">{ label }</label>

         <div className={ s.slot_list }>
            <label className={ s.slot }>
               <input
                  type="radio"
                  name={ name }
                  value={ `${ start } to ${ second.format( 'hh:mm a' ) }` }
                  checked={ value === `${ start } to ${ second.format( 'hh:mm a' ) }` }
                  onChange={ onChange }
               />
               <div>{ `${ start } to ${ second.format( 'hh:mm a' ) }` }</div>
            </label>

            <label className={ s.slot }>
               <input
                  type="radio"
                  name={ name }
                  value={ `${ second.format( 'hh:mm' ) } to ${ end.format( 'hh:mm a' ) }` }
                  checked={ value === `${ second.format( 'hh:mm' ) } to ${ end.format( 'hh:mm a' ) }` }
                  onChange={ onChange }
               />
               <div>{ `${ second.format( 'hh:mm' ) } to ${ end.format( 'hh:mm a' ) }` }</div>
            </label>
         </div>
      </div>
   )
}


export default FormSlot;