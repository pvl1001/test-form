import s from "./UserForm.module.scss";
import BtnBack from "../../components-ui/BtnBack/BtnBack";
import Progress from "../Progress/Progress";
import FormStep1 from "./FormStep1/FormStep1";
import { useState } from "react";
import { TStep } from "../../types";
import FormStep4 from "./FormStep4/FormStep4";
import FormDone from "./FormDone/FormDone";


function UserForm() {
   const [ step, setStep ] = useState<TStep>( 1 )
   return (
      <div className={ s._ }>
         { step !== 5
            ? <>
               <BtnBack className={ s.BtnBack } onClick={ () => setStep( 1 ) }/>

               <Progress step={ step } className={ s.Progress }/>

               { step === 1 && <FormStep1 setStep={ setStep }/> }
               { step === 4 && <FormStep4 setStep={ setStep }/> }
            </>
            : <FormDone setStep={ setStep }/>
         }
      </div>
   )
}


export default UserForm;