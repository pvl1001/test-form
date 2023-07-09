import s from "./FormDone.module.scss";
import doneImg from '../../../assets/images/done.webp';
import { useContext, useState } from "react";
import { ReactComponent as CalendarIcon } from '../../../assets/svg/calendar.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/clock.svg';
import { ReactComponent as MenIcon } from '../../../assets/svg/men.svg';
import { ReactComponent as CallIcon } from '../../../assets/svg/call.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/link.svg';
import { FormContext } from "../../../context/FormContext";
import { DATE_FORMAT } from "../../../utils/constants";
import dayjs from "dayjs";
import Button from "../../../components-ui/Button/Button";
import { TStep } from "../../../types";


function FormDone( { setStep }: {
   setStep: ( step: TStep ) => void
} ) {
   const { order } = useContext( FormContext )
   const [ orderList ] = useState( () => [
      {
         icon: <CalendarIcon/>,
         text: `Scheduled for ${ dayjs( order.appointmentDate ).format( DATE_FORMAT ) }`
      },
      {
         icon: <ClockIcon/>,
         text: `From ${ order.slotTime }`,
         range: '(~15 mins)'
      },
      {
         icon: <MenIcon/>,
         text: 'Consultant will be our care counsellor',
      },
      {
         icon: <CallIcon/>,
         text: 'Consultation will be an audio call',
      },
      {
         icon: <LinkIcon/>,
         text: 'Link sent on your email and whatsapp.',
      },
   ] )


   return (
      <div className={ s._ }>
         <img className={ s.img } src={ doneImg } alt="done"/>
         <h2 className={ 'form-title ' + s.title }>Scheduled successfully!</h2>

         <div>
            <ul className={ s.order_list }>
               { orderList.map( ( el, i ) =>
                  <li key={ i } className={ s.order_list__item }>
                     { el.icon }
                     <p>
                        { el.text } { el.range && <span>{ el.range }</span> }
                     </p>
                  </li>
               ) }
            </ul>
         </div>

         <Button onClick={ () => setStep( 1 ) }>Done</Button>
      </div>
   )
}


export default FormDone;