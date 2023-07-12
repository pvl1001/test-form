import s from "./FormCallType.module.scss";
import { ReactComponent as VideoIcon } from '../../assets/svg/video.svg';
import { ReactComponent as CallIcon } from '../../assets/svg/call.svg';
import { TCallType } from "../../types";
import { ChangeEvent } from "react";


function FormCallType( { label, value, name, onChange }: {
   label: string
   name: string
   value: TCallType
   onChange: ( e: ChangeEvent<HTMLInputElement> ) => void
} ) {
   return (
      <div className={ s._ }>
         <label className="input-label">{ label }</label>

         <div className={ s.type_list }>
            <label className={ s.type }>
               <input
                  type="radio"
                  name={ name }
                  value="video"
                  checked={ value === 'video' }
                  onChange={ onChange }
               />
               <div>
                  <VideoIcon width={ 37 }/>
                  Video call
               </div>
            </label>

            <label className={ s.type }>
               <input
                  type="radio"
                  name={ name }
                  value="audio"
                  checked={ value === 'audio' }
                  onChange={ onChange }
               />
               <div>
                  <CallIcon width={ 32 }/>
                  Audio call
               </div>
            </label>
         </div>
      </div>
   )
}


export default FormCallType;